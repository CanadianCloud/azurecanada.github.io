import React from 'react';
import styles from '../styles/JoinCommunity.module.css';
import galleryImg from '../assets/Imgs/gallery_img.jpg';
import cloudImg from '../assets/Imgs/cloud_img.jpg';

const JoinCommunity: React.FC = () => {
  return (
    <section id="join-community" className={styles.joinCommunity}>
      <div className={styles.contentWrapper}>
        <div className={styles.squaresContainer}>
          <div className={styles.shape}>
            <p>Join us and be part of a community where collaboration, support, and growth truly matter.</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={galleryImg} alt="Gallery showcasing community events" />
            <img src={cloudImg} alt="Community gathering" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;