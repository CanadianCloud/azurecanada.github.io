import React, { useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
import LocationIcon from '../assets/Icons/icons8-location-52.png';
import GalleryImage from '../assets/Imgs/gallery_img.jpg';

interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  month: string;
  day: string;
  year: number;
  time: string;
  location: string;
  venue: string;
  url: string;
  coverImage: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load events:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="events" className={styles.events}>
        <h2>Events</h2>
        <p>Loading events...</p>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section id="events" className={styles.events}>
        <h2>Events</h2>
        <p>Check out the upcoming events and get involved, your participation makes a difference!</p>
        <div className={styles.eventCard}>
          <div className={styles.eventDetails}>
            <h3>No upcoming events</h3>
            <p>Stay tuned for future events!</p>
            <a href="https://luma.com/msazure" className={styles.btn}>View All Events →</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className={styles.events}>
      <h2>Events</h2>
      <p>Check out the upcoming events and get involved, your participation makes a difference!</p>
      {events.slice(0, 3).map((event) => (
        <div key={event.id} className={styles.eventCard}>
          <div className={styles.eventDate}>
            <span className={styles.month}>{event.month}</span>
            <span className={styles.day}>{event.day}</span>
          </div>
          <div className={styles.eventDetails}>
            <h3>{event.name}</h3>
            <p>
              <img src={LocationIcon} alt="Location Icon" /> {event.venue || event.location}
            </p>
            <p>{event.location}</p>
            <a href={event.url} className={styles.btn} target="_blank" rel="noopener noreferrer">
              Save Your Spot →
            </a>
          </div>
          <div className={styles.imagePlaceholder}>
            <img src={event.coverImage || GalleryImage} alt={event.name} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Events;