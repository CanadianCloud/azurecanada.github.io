import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const calendarUrl = 'https://luma.com/msazure';
const apiUrl = 'https://api2.luma.com/calendar/get-items?calendar_api_id=cal-r59nhdnBg69yqIt&pagination_limit=50&period=future';
export function parseCalendar(html) {
  const script = html.match(/<script\b[^>]*\bid="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!script) throw new Error('Luma calendar data is missing');
  const data = JSON.parse(script[1]).props?.pageProps?.initialData?.data;
  if (data?.calendar?.api_id !== 'cal-r59nhdnBg69yqIt' || !Array.isArray(data.upcoming?.entries)) throw new Error('Unrecognized Luma calendar response');
  if (data.upcoming.has_more) throw new Error('Calendar requires pagination');
  return data.upcoming.entries;
}
export function normalizeEvents(entries, now = Date.now()) {
  if (!Array.isArray(entries)) throw new Error('Invalid Luma events response');
  const events = entries.map(({ event }) => {
    if (!event?.api_id || !event.name || !Number.isFinite(Date.parse(event.start_at)) || !event.url) throw new Error('Incomplete Luma event');
    const url = new URL(event.url, 'https://luma.com/');
    if (!['luma.com', 'lu.ma'].includes(url.hostname) || url.protocol !== 'https:') throw new Error('Invalid event URL');
    return {
      id: event.api_id, name: event.name, date: new Date(event.start_at).toISOString(), endDate: event.end_at || event.start_at,
      location: event.geo_address_info?.full_address || event.geo_address_info?.city_state || 'See event for venue details',
      venue: event.geo_address_info?.address || event.geo_address_info?.place_name || '',
      url: url.href, coverImage: event.cover_url || ''
    };
  });
  return [...new Map(events.filter(e => Date.parse(e.endDate) > now).map(e => [e.id, e])).values()].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
}
async function get(url) {
  const response = await fetch(url, { headers: { Accept: url === calendarUrl ? 'text/html' : 'application/json' }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`Luma returned HTTP ${response.status}`);
  return response;
}
export async function refreshEvents() {
  let entries;
  try {
    entries = parseCalendar(await (await get(calendarUrl)).text());
    console.log('Loaded events from the public Luma calendar');
  } catch (error) {
    console.warn(`Public calendar unavailable: ${error.message}; trying the calendar API`);
    entries = [];
    let cursor;
    do {
      const url = new URL(apiUrl);
      if (cursor) url.searchParams.set('pagination_cursor', cursor);
      const data = await (await get(url.href)).json();
      if (!Array.isArray(data.entries)) throw new Error('Invalid calendar API response');
      entries.push(...data.entries);
      if (data.has_more && (!data.next_cursor || data.next_cursor === cursor)) throw new Error('Invalid event pagination');
      cursor = data.has_more ? data.next_cursor : null;
    } while (cursor);
  }
  const events = normalizeEvents(entries);
  const output = fileURLToPath(new URL('../public/events.json', import.meta.url));
  await fs.writeFile(`${output}.tmp`, `${JSON.stringify(events, null, 2)}\n`);
  await fs.rename(`${output}.tmp`, output);
  console.log(`Saved ${events.length} upcoming events`);
}
