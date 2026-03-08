import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import JoinCommunity from './components/JoinCommunity';
import GetInvolved from './components/GetInvolved';
import FAQs from './components/FAQs';
import Sponsors from './components/Sponsors';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <main>
      <Hero />
      <About />
      <div className="transitionSection"></div>
      <Events />
      <GetInvolved />
      <Sponsors />
      <JoinCommunity />
      <FAQs />
    </main>
    <Footer />
  </StrictMode>,
);
