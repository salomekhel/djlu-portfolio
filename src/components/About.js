import React from 'react';
import '../styles/styles.css';  // Importing styles as usual

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About DJ LU</h2>
      <div className="about-content">
        <img src={require('../assets/images/djlu-1.jpg')} alt="DJ LU" />
        <img src={require('../assets/images/djlu-2.jpg')} alt="DJ LU" />
        <img src={require('../assets/images/djlu-3.jpg')} alt="DJ LU" />
      </div>
    </section>
  );
};

export default About;
