import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseCalendar, normalizeEvents, refreshEvents } from './luma-events.mjs';
import fs from 'node:fs/promises';
const entry = { event: { api_id: 'evt-example', name: 'Community meetup', start_at: '2030-01-01T02:00:00Z', end_at: '2030-01-01T04:00:00Z', url: 'example', geo_address_info: { city_state: 'Vancouver, BC' }, calendar_api_id: 'a-partner-calendar' } };
const html = data => `<script id="__NEXT_DATA__" type="application/json">${JSON.stringify({props:{pageProps:{initialData:{data}}}})}</script>`;
test('public calendar includes events shared from other calendars', () => {
  const entries = parseCalendar(html({calendar:{api_id:'cal-r59nhdnBg69yqIt'},upcoming:{entries:[entry],has_more:false}}));
  assert.equal(normalizeEvents(entries, 0)[0].url, 'https://luma.com/example');
  assert.equal(normalizeEvents(entries, 0)[0].location, 'Vancouver, BC');
});
test('genuinely empty calendars differ from missing or partial data', () => {
  assert.deepEqual(parseCalendar(html({calendar:{api_id:'cal-r59nhdnBg69yqIt'},upcoming:{entries:[],has_more:false}})), []);
  assert.throws(() => parseCalendar('<html>Rate limited</html>'));
  assert.throws(() => parseCalendar(html({calendar:{api_id:'cal-r59nhdnBg69yqIt'}})));
  assert.throws(() => parseCalendar(html({calendar:{api_id:'cal-r59nhdnBg69yqIt'},upcoming:{entries:[entry],has_more:true}})));
});
test('expired events disappear; ongoing events stay; malformed entries fail safely', () => {
  assert.equal(normalizeEvents([entry], Date.parse('2030-01-01T03:00:00Z')).length, 1);
  assert.equal(normalizeEvents([entry], Date.parse('2030-01-01T05:00:00Z')).length, 0);
  assert.throws(() => normalizeEvents([{event:{name:'Broken'}}]));
  assert.throws(() => normalizeEvents([{event:{...entry.event,url:'https://example.com/bad'}}]));
});
test('rate limits never erase the last successful event file', async () => {
  const file = new URL('../public/events.json', import.meta.url);
  const previous = await fs.readFile(file, 'utf8');
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response('Rate limited', { status: 429 });
  try { await assert.rejects(refreshEvents(), /429/); assert.equal(await fs.readFile(file, 'utf8'), previous); }
  finally { globalThis.fetch = originalFetch; }
});
