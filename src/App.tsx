import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
import setCursorLocation from './utils/helpers/setCursorLocation';
import Cursor from './components/Cursor/Cursor';
import setCursorAppearance from './utils/helpers/setCursorAppearance';

function App() {
  return (
    <div className="App"
      onMouseMove={(e) => setCursorLocation(e)}
      onMouseDown={(e) => setCursorAppearance(e)}
      onMouseUp={(e) => setCursorAppearance(e)}
    >
      <Cursor />
      <NavBar />
      <LanguageSwitch />
      <Hero />
    </div>
  );
}

export default App;
