import React, { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import styles from '../styles/Header.module.css';
import Logo from '../assets/Imgs/Azure logo_white_png.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(-100);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const updateScrollOffset = () => {
    if (window.innerWidth <= 768) {
      setScrollOffset(-70);
    } else if (window.innerWidth <= 1024) {
      setScrollOffset(-80);
    } else {
      setScrollOffset(-100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollOffset);
    updateScrollOffset(); // Set initial value
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollOffset);
    };
  }, []);

  const scrollToHero = () => {
    scroller.scrollTo('hero', {
      duration: 400,
      smooth: 'linear',
      offset: 0,
    });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <img src={Logo} alt="Azure Logo" className={styles.logo} onClick={scrollToHero} />
        <button className={styles.burgerMenu} onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="about" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="events" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                Events
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="get-involved" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                Get Involved
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="partners" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                Partners
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="sponsors" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                Sponsors
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="faq" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="discord" smooth="linear" duration={400} offset={scrollOffset} onClick={toggleMenu}>
                Discord
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;