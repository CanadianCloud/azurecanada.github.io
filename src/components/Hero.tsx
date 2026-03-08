import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Network - Learn - Give Back</h1>
        <p>
          Step into a vibrant space where anyone curious about Azure can connect, explore, and turn ideas into action. Join us and be part of a community that inspires, supports, and empowers.        </p>
        <div className={styles.heroButtons}>
          <a href="https://luma.com/msazure" className={styles.btn}>Join our next event</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;