import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/styles.css';

const Music = () => {
  return (
    <section id="music" className="music-section">
      <h2>Music & Mixes</h2>

      
      <div className="music-player">
        <ReactPlayer 
          url="https://soundcloud.com/djluuu/animal-style-mix?ref=clipboard&p=i&c=0&si=409C742955C44A57A101320C1435CA27&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
          width="100%" 
          height="150px" 
          controls={true} 
        />
        <ReactPlayer 
          url="https://soundcloud.com/djluuu/beat-droop?ref=clipboard&p=i&c=0&si=D952B7B1ACC544C0A93E1D2D7FB1102C&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
          width="100%" 
          height="150px" 
          controls={true} 
        />

        <ReactPlayer 
          url="https://soundcloud.com/djluuu/chonk?ref=clipboard&p=i&c=0&si=D613219FCA144ABCB5149FDDD8483477&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
          width="100%" 
          height="150px" 
          controls={true} 
        />
      </div>
    </section>
  );
};

export default Music;