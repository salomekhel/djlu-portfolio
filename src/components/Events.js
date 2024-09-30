import React from 'react';
import '../styles/styles.css';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        <div className="event-tile">
          <h3>Event Name 1</h3>
          <p>Location: The Whistler</p>
          <p>Date: Nov 26, 9PM - 12AM</p>
        </div>
        <div className="event-tile">
          <h3>Event Name 2</h3>
          <p>Location: Hell Phone</p>
          <p>Date: June 8, 10PM - Late</p>
        </div>
        <div className="event-tile">
          <h3>Event Name 3</h3>
          <p>Location: Some Venue</p>
          <p>Date: TBD</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
