import React from 'react';
import styles from '../styles/GetInvolved.module.css';
import volunteerIcon from '../assets/Icons/volunteer_icon_png.png';
import microphoneIcon from '../assets/Icons/microphone_icon.png';
import starIcon from '../assets/Icons/star_icon_png.png';
import Partners from './Partners';

const GetInvolved: React.FC = () => {
    return (
        <>
            <section id="get-involved" className={styles.getInvolved}>
                <div className={styles.container}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <a href="https://tally.so/r/mK7jEK" className={styles.cardLink}>
                                <img src={volunteerIcon} alt="Join Our Volunteers" className={styles.cardIcon} />
                                <h3 className={styles.cardTitle}>Join Our Volunteers</h3>
                                <p className={styles.cardDescription}>Connect with the local community by lending a hand at our next event.</p>
                            </a>
                        </div>
                        <div className={styles.card}>
                            <a href="https://tally.so/r/w2q60g" className={styles.cardLink}>
                                <img src={microphoneIcon} alt="Share Your Voice" className={styles.cardIcon} />
                                <h3 className={styles.cardTitle}>Share Your Voice</h3>
                                <p className={styles.cardDescription}>We're looking for passionate speakers to inspire our Azure community.</p>
                            </a>
                        </div>
                        <div className={styles.card}>
                            <a href="https://tally.so/r/nWG7xR" className={styles.cardLink}>
                                <img src={starIcon} alt="Partner With Us" className={styles.cardIcon} />
                                <h3 className={styles.cardTitle}>Partner With Us</h3>
                                <p className={styles.cardDescription}>Your support goes directly toward food and drinks for Azure innovators.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Partners />
        </>
    );
};

export default GetInvolved;