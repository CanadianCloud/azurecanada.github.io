import React from 'react';
import styles from '../styles/About.module.css';
import AboutImage from '../assets/Imgs/get involved img.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>More than a Community</h2>
          <p>
            The <strong>Vancouver Microsoft Azure Usergroup</strong> was started in 2014, with over
            1,000 active members. Today, we run events every quarter, including being a co-host in
            Vancouver's largest Cloud and AI Conference in Western Canada Cloud Summit.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={AboutImage} alt="Community" />
        </div> 
      </div>
      <div className={styles.tagline}>
        <div className={styles.slider}>
          <h3>NETWORK → LEARN → GROW → GIVE BACK → SHARE →</h3>
          <h3>NETWORK → LEARN → GROW → GIVE BACK → SHARE →</h3>
        </div>
      </div>
    </section>
  );
};

export default About;