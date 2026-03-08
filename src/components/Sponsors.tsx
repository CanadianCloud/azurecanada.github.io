import React from 'react';
import styles from '../styles/Sponsors.module.css';

import dockerLogo from '../assets/Sponsors/01_Docker_logo.png';
import datadogLogo from '../assets/Sponsors/02_Datadog_logo.png';
import hpLogo from '../assets/Sponsors/03_hp_logo.png';
import hootsuiteLogo from '../assets/Sponsors/04_Hootsuite_Logo.png';
import vmwareLogo from '../assets/Sponsors/VMware-Logo.png';
import sophosLogo from '../assets/Sponsors/06_Sophos_logo.png';
import netappLogo from '../assets/Sponsors/07_NetApp_logo.png';
import suseLogo from '../assets/Sponsors/08_suse_logo.png';
import elasticLogo from '../assets/Sponsors/09_elastic_logo.png';
import trendMicroLogo from '../assets/Sponsors/10_trendmicro_logo.png';
import roninLogo from '../assets/Sponsors/11_ronin_logo.png';
import paloAltoLogo from '../assets/Sponsors/12_PaloAltoNetworks_Logo.png';
import sumologicLogo from '../assets/Sponsors/13_sumologic_logo.png';
import commvaultLogo from '../assets/Sponsors/14_commvault_logo.png';
import fortinetLogo from '../assets/Sponsors/15_fortinet_logo.png';
import robsonLogo from '../assets/Sponsors/16_robson_logo.png';
import veeamLogo from '../assets/Sponsors/17_veeam_logo.png';
import hashicorpLogo from '../assets/Sponsors/18_hashicorp_logopng.png';
import couchbaselogo from '../assets/Sponsors/couchbase_logo.png';

const Sponsors: React.FC = () => {
    return (
        <section id="sponsors" className={styles.sponsors}>
            <div className={styles.container}>
                <h2 className={styles.title}>Sponsors</h2>
                <p className={styles.description}>
                    Thank you to all our past sponsors for your support.
                </p>
                <div className={styles.sponsorLogos}>
                    {/* First Row */}
                    <img src={dockerLogo} alt="Docker Logo" className={styles.logo} />
                    <img src={datadogLogo} alt="Datadog Logo" className={styles.logo} />
                    <img src={hpLogo} alt="HP Logo" className={styles.logo} />
                    <img src={hootsuiteLogo} alt="Hootsuite Logo" className={styles.logo} />
                    <img src={vmwareLogo} alt="VMware Logo" className={styles.logo} />
                    <img src={sophosLogo} alt="Sophos Logo" className={styles.logo} />

                    {/* Second Row */}
                    <img src={netappLogo} alt="NetApp Logo" className={styles.logo} />
                    <img src={suseLogo} alt="SUSE Logo" className={styles.logo} />
                    <img src={elasticLogo} alt="Elastic Logo" className={styles.logo} />
                    <img src={trendMicroLogo} alt="Trend Micro Logo" className={styles.logo} />
                    <img src={roninLogo} alt="Ronin Logo" className={styles.logo} />
                    <img src={paloAltoLogo} alt="Palo Alto Networks Logo" className={styles.logo} />
                    <img src={sumologicLogo} alt="Sumo Logic Logo" className={styles.logo} />

                    {/* Third Row */}
                    <img src={commvaultLogo} alt="Commvault Logo" className={styles.logo} />
                    <img src={fortinetLogo} alt="Fortinet Logo" className={styles.logo} />
                    <img src={robsonLogo} alt="Robson Logo" className={styles.logo} />
                    <img src={veeamLogo} alt="Veeam Logo" className={styles.logo} />
                    <img src={hashicorpLogo} alt="HashiCorp Logo" className={styles.logo} />
                    <img src={couchbaselogo} alt="Couchbase Logo" className={styles.logo} />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;