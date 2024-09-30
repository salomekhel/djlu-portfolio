import React from 'react';
import '../styles/styles.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact DJ LU</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className="btn">Let’s Get Funky</button>
      </form>
    </section>
  );
};

export default Contact;
