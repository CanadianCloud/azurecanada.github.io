import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
await mkdir('test-results',{recursive:true});
const server=spawn('npm',['run','preview','--','--host','127.0.0.1','--port','4173'],{stdio:'inherit'});
const base='http://127.0.0.1:4173';
let browser;
try{
 let ready=false;
 for(let i=0;i<100;i++){try{if((await fetch(base)).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,150));}
 assert(ready,'Preview server must start');
 browser=await chromium.launch();
 const page=await browser.newPage();
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});
  await page.goto(base,{waitUntil:'networkidle'});
  await page.locator('.empty-event').waitFor();
  assert.equal(await page.locator('h1').innerText(),'Build something\nbigger.\nTogether.');
  assert.equal(await page.locator('.faq-list details').count(),14);
  assert.equal(await page.locator('.sponsor-logos img').count(),19);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Horizontal overflow at '+width);
  const badAnchors=await page.locator('a[href^="#"]').evaluateAll(links=>links.filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash));
  assert.deepEqual(badAnchors,[]);
  const badImages=await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(i=>{i.loading='eager';return i.decode().catch(()=>{});}));return imgs.filter(i=>!i.naturalWidth).map(i=>i.src);});
  assert.deepEqual(badImages,[]);
  if(width<=800){
   const toggle=page.locator('.menu-toggle');
   await toggle.click();
   assert.equal(await toggle.getAttribute('aria-expanded'),'true');
   await page.locator('#main-navigation').getByRole('link',{name:'Events',exact:true}).click();
   assert.equal(await toggle.getAttribute('aria-expanded'),'false');
  }
  const summary=page.locator('.faq-list summary').first();
  await summary.click();
  assert(await page.locator('.faq-list details').first().getAttribute('open')!==null);
  await summary.press('Enter');
  assert.equal(await page.locator('.faq-list details').first().getAttribute('open'),null);
  await page.getByRole('link',{name:'Code of Conduct',exact:true}).click();
  assert(await page.locator('#code-of-conduct').getAttribute('open')!==null);
  await page.goto(base,{waitUntil:'networkidle'});
  await page.screenshot({path:'test-results/site-'+width+'.png',fullPage:true});
  console.log('Responsive layout, images, menu, FAQ and anchors passed at '+width+'px');
 }
 assert.equal((await page.request.get(base+'/blueprint-vancouver.png')).status(),200);
 await page.route('**/events.json',r=>r.fulfill({json:[
  {id:'late',name:'Later meetup',date:'2099-06-02T01:00:00Z',url:'https://luma.com/later',venue:'Vancouver'},
  {id:'past',name:'Past meetup',date:'2020-01-01T01:00:00Z',url:'https://luma.com/past'},
  {id:'early',name:'Earlier meetup',date:'2099-06-01T01:00:00Z',url:'https://luma.com/earlier',venue:'Community venue'},
  {id:'invalid',name:'Invalid link',date:'2099-01-01T01:00:00Z',url:'javascript:alert(1)'}
 ]}));
 await page.goto(base,{waitUntil:'networkidle'});
 assert.equal(await page.locator('.event-card').count(),2);
 assert.equal(await page.locator('.event-card h3').first().innerText(),'Earlier meetup');
 assert.match(await page.locator('.event-card').first().innerText(),/May 31/);
 await page.unroute('**/events.json');
 await page.route('**/events.json',r=>r.fulfill({status:500,body:'Unavailable'}));
 await page.goto(base,{waitUntil:'networkidle'});
 await page.locator('.empty-event').waitFor();
 assert.match(await page.locator('.empty-event').innerText(),/Check our Luma calendar/);
 assert.equal(await page.locator('.empty-event').getAttribute('href'),'https://luma.com/msazure');
 assert.deepEqual(errors,[]);
 console.log('Event ordering, past-event filtering, Vancouver time zone, invalid URL filtering and fetch-error fallback passed.');
}finally{await browser?.close();server.kill();}
