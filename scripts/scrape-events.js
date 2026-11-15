import { refreshEvents } from './luma-events.mjs';
refreshEvents().catch(error => { console.error('Event sync failed; existing events preserved:', error.message); process.exitCode = 1; });
