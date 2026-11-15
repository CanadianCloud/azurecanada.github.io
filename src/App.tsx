import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import faqs from './faqs';
import logo from './assets/Imgs/Azure logo_white_png.png';
import communityPhoto from './assets/Imgs/get involved img.jpg';
import galleryPhoto from './assets/Imgs/gallery_img.jpg';
import cloudPhoto from './assets/Imgs/cloud_img.jpg';
import cloudSummit from './assets/Partners/02_CloudSummit_logo.png';
import cpca from './assets/Partners/04_CPCA_logo.png';
const luma='https://luma.com/msazure';
const discord='https://discord.com/invite/wg372JtEK8';
const sponsors=Object.entries(import.meta.glob('./assets/Sponsors/*.png',{eager:true,import:'default'}) as Record<string,string>).sort(([a],[b])=>a.localeCompare(b));
type Meetup={id:string;name:string;date:string;location:string;venue:string;url:string};
function Icon({kind}:{kind:string}){
 const shapes:Record<string,ReactNode>={
 calendar:<><rect x="4" y="6" width="24" height="23" rx="2"/><path d="M4 13h24M10 2v8M22 2v8"/></>,
 people:<><circle cx="16" cy="9" r="5"/><path d="M7 29v-4a9 9 0 0 1 18 0v4M4 13a4 4 0 0 1 0-8M28 13a4 4 0 0 0 0-8M1 26v-5a6 6 0 0 1 5-6M31 26v-5a6 6 0 0 0-5-6"/></>,
 cube:<path d="m16 2 13 7v15l-13 7L3 24V9Z M3 9l13 8 13-8M16 17v14M10 5l13 8v6"/>,
 chat:<><path d="M3 3h22v17H12l-7 7v-7H3ZM12 25h10l6 5v-9h3V10h-3"/><path d="M8 11h1m5 0h1m5 0h1"/></>,
 mic:<><rect x="11" y="2" width="10" height="19" rx="5"/><path d="M6 14v2a10 10 0 0 0 20 0v-2M16 26v5M10 31h12"/></>,
 heart:<path d="M16 28 4 16C-5 6 9-3 16 7c7-10 21-1 12 9Z"/>
 };
 return <svg className="icon" viewBox="0 0 32 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[kind]||shapes.cube}</svg>;
}
function Button({href,children,secondary=false}:{href:string;children:ReactNode;secondary?:boolean}){
 return <a className={'button'+(secondary?' secondary':'')} href={href}>{children}<span aria-hidden="true">→</span></a>;
}
function Skyline(){
 return <svg className="skyline" viewBox="0 0 1200 160" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
 <path opacity=".5" d="m0 106 68-27 50 9 43-35 45 17 50-31 55 33 45-14 58 34 87-29 67 25 43-35 65 22 49-6 79 39 62-18 72 17 72-23 80 22"/>
 <path d="M0 150h1200M0 155h1200M10 147h185v-36l-25 32v-49l-25 49v-36l-24 36V91l-26 52v-37l-24 37v-28l-22 28H10ZM285 150V92h35v58m-30-51h25m-25 8h25m-25 8h25m-25 8h25m-25 8h25m-25 8h25M330 150V70h40v80m-32-72h24m-24 10h24m-24 10h24m-24 10h24m-24 10h24m-24 10h24m-24 10h24M387 150V98h31v52M432 150V45h38v105m-30-97h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22M500 150V80h45v70M560 150V105h34v45M613 150V58h37v92M680 150V95h27v55M729 150V75h42v75M795 150V114h34v36M861 150V92h27v58M232 150V59h12v91M230 59h16l11-10h-38Zm-11-10v-5h38v5m-35-5 4-6h24l4 6m-16-6V13m-6 14h12M920 150V89h17v61m115 0V89h17v61M916 137h160M930 95q64-51 131 0M937 96v38m12-45v45m12-50v50m12-55v55m12-58v58m12-59v59m12-57v57m12-53v53m12-48v48m12-41v41M890 135l30-17m149 0 82 17"/>
 </svg>;
}
const involvement=[
 ['people','Join Our Volunteers','Connect with the local community by lending a hand at our next event.','https://tally.so/r/mK7jEK','Become a volunteer'],
 ['mic','Share Your Voice',"We're looking for passionate speakers to inspire our Azure community.",'https://tally.so/r/w2q60g','Submit a talk'],
 ['heart','Partner With Us','Your support goes directly toward food and drinks for Azure innovators.','https://tally.so/r/nWG7xR','Become a sponsor']
];
const socialLinks=[['Discord',discord],['Instagram','https://www.instagram.com/canadiancloudninja/'],['LinkedIn','https://linkedin.com/company/canadiancloud'],['Meetup','https://www.meetup.com/azure-canada/'],['YouTube','https://www.youtube.com/channel/UCMfuz22CouuimIXngTMMZIQ'],['Luma',luma]];
export default function App(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [events,setEvents]=useState<Meetup[]>([]);
 const [eventState,setEventState]=useState('loading');
 useEffect(()=>{
  const controller=new AbortController();
  fetch('/events.json',{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('Events unavailable');return r.json();}).then((data:Meetup[])=>{
   if(!Array.isArray(data))throw new Error('Invalid events');
   setEvents(data.filter(e=>e&&e.name&&/^https:\/\/(?:lu\.ma|luma\.com)\//.test(e.url)&&Date.parse(e.date)>Date.now()).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date)));
   setEventState('ready');
  }).catch(e=>{if(e.name!=='AbortError')setEventState('error');});
  return ()=>controller.abort();
 },[]);
 const date=(value:string,options:Intl.DateTimeFormatOptions)=>new Intl.DateTimeFormat('en-CA',{...options,timeZone:'America/Vancouver'}).format(new Date(value));
 return <>
 <a className="skip-link" href="#main">Skip to content</a>
 <header className="site-header"><div className="header-inner">
  <a href="#hero" aria-label="Azure Canada home"><img className="brand" src={logo} alt="Azure User Group"/></a>
  <div className="brand-place">Vancouver<br/><span>Microsoft Azure User Group</span></div>
  <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?'Close ×':'Menu ☰'}</button>
  <nav id="main-navigation" className={menuOpen?'is-open':''} aria-label="Main navigation" onClick={()=>setMenuOpen(false)}><a href="#events">Events</a><a href="#community">Community</a><a href="#get-involved">Get involved</a><a href="#about">About</a><a href="#faq">FAQ</a></nav>
 </div></header>
 <main id="main" className="site-main">
  <section id="hero" className="hero"><div className="hero-art" role="img" aria-label="Blueprint illustration of Vancouver, its mountains, waterfront and Azure cloud"/><div className="hero-copy">
   <p className="eyebrow">AZURE CANADA <span>/</span> VANCOUVER</p>
   <h1>Build<br/>something<br/>bigger.<br/>Together.</h1><div className="cyan-rule"/>
   <p className="hero-description">The Vancouver community for Microsoft Azure. Learn, share, network, and build in person.</p>
   <div className="button-row"><Button href="#events">Find your next meetup</Button><Button href="#community" secondary>Join the community</Button></div>
  </div><span className="drawing-label" aria-hidden="true">VANCOUVER · BUILT TOGETHER</span></section>
  <section id="events" className="section events-section">
   <div className="section-heading"><Icon kind="calendar"/><h2>Upcoming events</h2><span/></div>
   <div className="events-layout"><div><p>In-person meetups in Vancouver with the local Azure community.</p><a className="text-link" href={luma}>View all events on Luma ↗</a></div>
    <div className="event-list" aria-live="polite">
    {eventState==='loading'?<div className="draft-card empty-event"><Icon kind="calendar"/><div><h3>Loading upcoming meetups…</h3><p>You can also browse our calendar on Luma.</p></div></div>:events.length?events.slice(0,3).map(e=>
     <a key={e.id} href={e.url} className="draft-card event-card"><div className="event-date"><span>{date(e.date,{month:'short'})}</span><strong>{date(e.date,{day:'2-digit'})}</strong></div><div><h3>{e.name}</h3><p>{date(e.date,{weekday:'short',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})} PT</p><p>{e.venue||e.location||'See event for venue details'}</p><span className="text-link">Save your spot →</span></div></a>
    ):<a href={luma} className="draft-card empty-event"><Icon kind="calendar"/><div><h3>Next meetup · Details coming soon</h3><p>{eventState==='error'?'Check our Luma calendar for the latest event details.':'Stay tuned for our next Vancouver Azure User Group meetup.'}</p><span className="text-link">View the event calendar →</span></div></a>}
    </div></div><Skyline/>
  </section>
  <section className="pillars" aria-label="Learn, connect and build">
   {[['cube','Learn','Explore real-world Microsoft Azure ideas, solutions, and best practices.'],['people','Connect','Meet and network with fellow Azure builders in the Vancouver community.'],['chat','Build','Turn ideas into impact with Azure, from modern apps to AI and cloud solutions.']].map(([icon,title,description])=><article className="draft-card pillar" key={title}><div className="card-title"><Icon kind={icon}/><h2>{title}</h2></div><p>{description}</p><div className="technical-art" aria-hidden="true"><Icon kind={icon}/></div></article>)}
  </section>
  <section id="about" className="section">
   <div className="section-heading"><Icon kind="people"/><h2>More than a community</h2><span/></div>
   <div className="about-layout"><div><p className="eyebrow">NETWORK / LEARN / GIVE BACK</p><p className="lead">Step into a vibrant space where anyone curious about Azure can connect, explore, and turn ideas into action.</p>
   <p>The <strong>Vancouver Microsoft Azure Usergroup</strong> was started in 2014, with over 1,000 active members. Today, we run events every quarter, including being a co-host in Vancouver's largest Cloud and AI Conference in Western Canada, Cloud Summit.</p><p>Join us and be part of a community that inspires, supports, and empowers.</p>
   <div className="community-facts"><div><strong>2014</strong><span>Our first meetup</span></div><div><strong>1,000+</strong><span>Active members</span></div><div><strong>100%</strong><span>Volunteer-run</span></div></div></div>
   <figure className="photo-frame"><img src={communityPhoto} alt="Members of our Vancouver cloud community at an event" loading="lazy"/><figcaption>Local people. Shared knowledge. Bigger possibilities.</figcaption></figure></div>
  </section>
  <section id="get-involved" className="section">
   <div className="section-heading"><Icon kind="heart"/><h2>Get involved</h2><span/></div>
   <div className="involved-intro"><div><p className="lead">A community-led user group by and for Vancouver's Microsoft Azure community.</p><p>Share knowledge, suggest topics, help organize meetups, and grow the community.</p></div><div className="involved-drawing" aria-hidden="true"><Icon kind="people"/><span>+</span><Icon kind="cube"/><span>=</span><Icon kind="chat"/></div></div>
   <div className="involvement-grid">{involvement.map(([icon,title,description,url,cta])=><a className="draft-card involvement-card" href={url} key={title}><Icon kind={icon}/><h3>{title}</h3><p>{description}</p><span className="text-link">{cta} →</span></a>)}</div>
  </section>
  <section id="partners" className="section"><div className="section-heading"><h2>Our partners</h2><span/></div><p>We're proud to collaborate with organizations that help us grow and empower the Azure community.</p><div className="partner-logos"><a href="https://www.cloudsummit.ca"><img src={cloudSummit} alt="Cloud Summit" loading="lazy"/></a><a href="https://canadiancloud.org"><img src={cpca} alt="Canadian Public Cloud Association" loading="lazy"/></a></div></section>
  <section id="sponsors" className="section"><div className="section-heading"><h2>Supported by our community</h2><span/></div><p>Thank you to all our past sponsors for your support.</p><div className="sponsor-logos">{sponsors.map(([path,src])=><div key={path}><img src={src} alt={path.split('/').pop()!.replace(/^\d+_/,'').replace(/[_-]/g,' ').replace(/ logo.*$/i,'').replace(/\.png$/,'')} loading="lazy"/></div>)}</div></section>
  <section id="community" className="section"><span id="discord" className="anchor-alias"/><div className="section-heading"><Icon kind="chat"/><h2>Your community, between meetups</h2><span/></div><div className="community-layout"><div><p className="eyebrow">NETWORK / LEARN / GROW / GIVE BACK / SHARE</p><h3>Join our Discord</h3><p>Connect with fellow Azure enthusiasts, share ideas, learn from the community, and stay updated on upcoming events.</p><p>Join us and be part of a community where collaboration, support, and growth truly matter.</p><div className="button-row"><Button href={discord}>Join Discord</Button><Button href={luma} secondary>Follow our events</Button></div></div><div className="gallery-grid"><img src={galleryPhoto} alt="A gathering of our cloud community" loading="lazy"/><img src={cloudPhoto} alt="Cloud community event" loading="lazy"/></div></div></section>
  <section id="faq" className="section faq-section"><div className="section-heading"><h2>A few things you might be wondering</h2><span/></div><p>Got questions? We've grouped the most common ones below to help you get the most out of our community events.</p><div className="faq-list">{faqs.map((faq,i)=><details key={faq.q} id={i===9?'code-of-conduct':undefined}><summary>{faq.q}<span aria-hidden="true">+</span></summary><div className="faq-answer" dangerouslySetInnerHTML={{__html:faq.a}}/></details>)}</div></section>
 </main>
 <footer className="site-footer"><div className="footer-top"><a href="#hero"><img className="brand" src={logo} alt="Azure User Group"/></a><div><strong>azurecanada.ca</strong><p>Vancouver Microsoft Azure User Group<br/>A community for Azure learners, builders, and professionals in Vancouver.</p></div><a className="text-link" href="#hero">Back to top ↑</a></div><div className="footer-links">
 <div><h3>Community</h3>{socialLinks.map(([label,url])=><a key={label} href={url}>{label}</a>)}</div>
 <div><h3>Get involved</h3>{involvement.map(([,title,,url])=><a key={title} href={url}>{title}</a>)}<a href="#code-of-conduct" onClick={()=>{const el=document.getElementById('code-of-conduct') as HTMLDetailsElement|null;if(el)el.open=true;}}>Code of Conduct</a></div>
 <div><h3>Explore</h3><a href="#about">About us</a><a href="#events">Events</a><a href="#partners">Partners</a><a href="#sponsors">Past sponsors</a><a href="#faq">FAQ</a></div>
 <div className="footer-note"><p className="eyebrow">BUILT ON COMMUNITY</p><p>Network. Learn. Give back.</p><small>Volunteer-run. Vancouver-rooted.</small></div>
 </div></footer>
 </>;
}
