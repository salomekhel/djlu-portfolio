import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Music from './components/Music';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Events />
      <Music />
      <Contact />
    </div>
  );
}

export default App;