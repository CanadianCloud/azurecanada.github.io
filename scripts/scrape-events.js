import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Calendar API ID discovered from: https://luma.com/msazure
const LUMA_CALENDAR_API_ID = 'cal-r59nhdnBg69yqIt';
const LUMA_CALENDAR_URL = `https://api2.luma.com/calendar/get-items?calendar_api_id=${LUMA_CALENDAR_API_ID}&pagination_limit=50&period=future`;

async function scrapeEvents() {
  try {
    console.log('Fetching events from Luma...');
    
    const response = await fetch(LUMA_CALENDAR_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; AzureCanadaBot/1.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    const events = data.entries?.map(entry => {
      const event = entry.event;
      const startDate = new Date(event.start_at);
      
      return {
        id: event.api_id,
        name: event.name,
        description: event.description || '',
        date: startDate.toISOString(),
        month: startDate.toLocaleString('en-US', { month: 'short' }),
        day: startDate.getDate().toString().padStart(2, '0'),
        year: startDate.getFullYear(),
        time: startDate.toLocaleString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
        location: event.geo_address_info?.full_address || event.location || 'TBD',
        venue: event.geo_address_info?.address || event.geo_address_info?.place_name || '',
        url: `https://lu.ma/${event.url}`,
        coverImage: event.cover_url || ''
      };
    }) || [];

    // Sort by date ascending
    events.sort((a, b) => new Date(a.date) - new Date(b.date));

    const outputPath = path.join(__dirname, '..', 'public', 'events.json');
    fs.writeFileSync(outputPath, JSON.stringify(events, null, 2));
    
    console.log(`Successfully saved ${events.length} events to public/events.json`);
    
  } catch (error) {
    console.error('Error scraping events:', error);
    process.exit(1);
  }
}

scrapeEvents();
