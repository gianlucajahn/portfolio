import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
