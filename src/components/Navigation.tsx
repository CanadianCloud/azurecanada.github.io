import { useState } from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* Burger Menu */}
      <div
        className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
      >
        <li><a href="#about">About Us</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#get-involved">Get Involved</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;