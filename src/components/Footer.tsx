import { scroller } from 'react-scroll';
import styles from '../styles/Footer.module.css';
import azureLogo from '../assets/Imgs/Azure logo_white_png.png';
import discordLogo from '../assets/Social Media/discord_logo.png';
import instagramLogo from '../assets/Social Media/instagram_logo.png';
import linkedinLogo from '../assets/Social Media/linkedin_logo.png';
import meetupLogo from '../assets/Social Media/meetup_logo.png';
import youtubeLogo from '../assets/Social Media/youtube_logo.png';
import lumaLogo from '../assets/Social Media/luma_logo.png';

const Footer = () => {
  const scrollToHero = () => {
    scroller.scrollTo('hero', {
      duration: 400,
      smooth: 'linear',
      offset: 0,
    });
  };

  return (
    <div className={styles.footerWrapper}>
      <footer id="discord" className={styles.footer}>
        <div className={styles.leftSection}>
          <h3>Join Our Discord</h3>
          <p>Connect with fellow Azure enthusiasts, share ideas, learn from the community, and stay updated on upcoming events.</p>
          <button className={styles.ctaButton} onClick={() => window.open('https://discord.com/invite/wg372JtEK8', '_blank', 'noopener noreferrer')}>
            Join Discord Here
          </button>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <div className={styles.logoSection}>
          <img 
            src={azureLogo} 
            alt="Azure Logo" 
            className={styles.footerLogo} 
            onClick={scrollToHero}
            style={{ cursor: 'pointer' }}
          />
          <ul className={styles.socialMediaIcons}>
             <li><a href="https://discord.com/invite/wg372JtEK8" target="_blank" rel="noopener noreferrer"><img src={discordLogo} alt="Discord" /></a></li>
            <li><a href="https://www.instagram.com/canadiancloudninja/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="Instagram" /></a></li>
            <li><a href="https://linkedin.com/company/canadiancloud" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn" /></a></li>
            <li><a href="https://www.meetup.com/azure-canada/" target="_blank" rel="noopener noreferrer"><img src={meetupLogo} alt="Meetup" /></a></li>
            <li><a href="https://www.youtube.com/channel/UCMfuz22CouuimIXngTMMZIQ" target="_blank" rel="noopener noreferrer"><img src={youtubeLogo} alt="YouTube" /></a></li>
            <li><a href="https://luma.com/msazure" target="_blank" rel="noopener noreferrer"><img src={lumaLogo} alt="Luma" /></a></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.helpfulLinks}>
            <h4>Helpful Links</h4>
            <ul>
              <li><a href="https://tally.so/r/mK7jEK" target="_blank" rel="noopener noreferrer">Be a Volunteer</a></li>
              <li><a href="https://tally.so/r/w2q60g" target="_blank" rel="noopener noreferrer">Call For Speakers</a></li>
              <li><a href="https://tally.so/r/nWG7xR" target="_blank" rel="noopener noreferrer">Become a Sponsor</a></li>
              <li><a href="#">Code of Conduct</a></li>
            </ul>
          </div>
          <div className={styles.menuLinks}>
            <h4>Menu</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
              <li><a href="#partners">Partners & Sponsors</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;