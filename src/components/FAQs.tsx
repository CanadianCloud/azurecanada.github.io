import React, { useEffect, useRef, useCallback } from 'react';
import styles from '../styles/FAQs.module.css';
import arrowIcon from '../assets/Icons/arrow_icon_png.png';

const FAQs: React.FC = () => {
    const faqListRef = useRef<HTMLDivElement>(null);

    const animateAccordion = useCallback((details: HTMLDetailsElement, isOpening: boolean) => {
        const content = details.querySelector(`.${styles.content}`) as HTMLElement;
        if (!content) return;

        if (isOpening) {
            details.open = true;
            content.style.gridTemplateRows = '0fr';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    content.style.gridTemplateRows = '1fr';
                });
            });
        } else {
            content.style.gridTemplateRows = '0fr';
            const onTransitionEnd = () => {
                details.open = false;
                content.removeEventListener('transitionend', onTransitionEnd);
            };
            content.addEventListener('transitionend', onTransitionEnd);
        }
    }, []);

    const closeOtherAccordions = useCallback((currentDetails: HTMLDetailsElement) => {
        if (!faqListRef.current) return;
        const allDetails = faqListRef.current.querySelectorAll('details');
        allDetails.forEach((details) => {
            if (details !== currentDetails && details.open) {
                animateAccordion(details, false);
            }
        });
    }, [animateAccordion]);

    useEffect(() => {
        const faqList = faqListRef.current;
        if (!faqList) return;

        const handleClick = (e: Event) => {
            const summary = (e.target as HTMLElement).closest('summary');
            if (!summary) return;

            e.preventDefault();
            const details = summary.parentElement as HTMLDetailsElement;
            
            if (details.open) {
                animateAccordion(details, false);
            } else {
                closeOtherAccordions(details);
                animateAccordion(details, true);
            }
        };

        faqList.addEventListener('click', handleClick);
        return () => faqList.removeEventListener('click', handleClick);
    }, [animateAccordion, closeOtherAccordions]);

    return (
        <section id="faq" className={styles.faqsSection}> {/* Added faqsSection class to apply background color */}
            <div className={styles['faqs-container']}>
                <h2 className={styles['faqs-title']}>FAQs</h2>
                <p className={styles['faqs-description']}>
                    Got questions? We’ve grouped the most common ones below to help you get the most out of our community events.
                </p>
                <div className={styles['faqs-list']} ref={faqListRef}>
                    <details>
                        <summary>
                            When and where do you meet?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    We host meetups bi-monthly in downtown Vancouver, usually on a weekday after 4 PM. Venue and exact time may vary for each event, 
                                    so please check the RSVP link on the site for details.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            When did the group start?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    The Vancouver Azure Usergroup held its first meetup in 2014 and until COVID was running a meetup every month. During COVID, we went quiet and have been slowly ramping back up since restrictions were removed, mostly due to the limited venues available for our large size and lack of businesses having a physical office space now. We also formed a registered not-for-profit society in 2023 and started the annual Cloud Summit conference since the monthly meetup events we were holding after COVID were drawing such large audiences with hundreds of people missing out each meetup due to venue limitations. As we look to the future, we are now running bi-monthly meetups as well as the annual Cloud Summit.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            Are you a business?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    No. We are a registered not-for-profit society, and our events are 100% volunteer-run. None of the organizers or volunteers are paid.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            Are events free?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    We try to make our events free. Sometimes we charge a small $5 fee to help with crowd control and to cover food costs.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            What’s the difference between regular meetups and the big annual events?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    Regular meetups are smaller gatherings of around 50-100 people focused on community networking and learning. 
                                    We also help host the large annual Cloud Summit Vancouver <a href="https://www.CloudSummit.ca" style={{ color: "#1C1C1C" }}>www.CloudSummit.ca</a>.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            How can I volunteer?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    There is a form on this website to sign up as a volunteer.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            What is involved in volunteering?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    It's up to you. Let us know what your skills are and we'll do our best to provide a rewarding experience. 
                                    It could be as simple as greeting, or more complex like looking after the AV gear. 
                                    It could even be helping online with the Discord channel, newsletter, website, etc.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            How can I give a talk?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    We welcome community speakers! Talks should be educational and vendor-neutral. 
                                    You may mention where you work when introducing yourself, but marketing or sales pitches are not allowed. 
                                    Violating this rule will result in not being invited back. Submit your talk idea using the form on this website.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            How can my company sponsor?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    Details are available in the sponsorship form on this website. For sponsors, we will promote you and let everyone know about the amazing support you're providing.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            Do you have a Code of Conduct?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    Yes. All events are covered by our Code of Conduct, which ensures a safe and inclusive environment. 
                                    Please note that events may sometimes be recorded.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            What is the goal of the group?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    Our mission is to create a space to share knowledge, network, and learn together in the Vancouver cloud community.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            How do I RSVP?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    All RSVPs are handled through Lu.ma. You'll find the link to each event on this website.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            Is food or drink provided?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    Sometimes, depending on the event and sponsorship. Please check the event details.
                                </p>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>
                            Are recordings or slides shared after events?
                            <img src={arrowIcon} alt="Arrow Icon" className={styles['arrow-icon']} />
                        </summary>
                        <div className={styles.content}>
                            <div>
                                <p>
                                    Not always — this varies depending on the speaker and event.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQs;