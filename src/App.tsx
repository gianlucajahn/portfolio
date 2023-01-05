import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LanguageSwitch />
      <Hero />
    </div>
  );
}

export default App;
