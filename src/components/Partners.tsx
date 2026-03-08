import React from 'react';
import styles from '../styles/Partners.module.css';
import cloudSummitLogo from '../assets/Partners/02_CloudSummit_logo.png';
import cpcaLogo from '../assets/Partners/04_CPCA_logo.png';

const Partners: React.FC = () => {
    return (
        <section id="partners" className={styles.partners}>
            <div className={styles.container}>
                <h2 className={styles.title}>Partners</h2>
                <p className={styles.description}>
                    We’re proud to collaborate with organizations that help us grow and empower the Azure community.
                </p>
                <div className={styles.partnerLogos}>
                    <img src={cloudSummitLogo} alt="Cloud Summit Logo" className={styles.logo} />
                    <img src={cpcaLogo} alt="CPCA Logo" className={styles.logo} />
                </div>
            </div>
        </section>
    );
};

export default Partners;