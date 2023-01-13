import React, { useReducer, createContext, useEffect, useContext, useRef } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";
import setCursorLocation from "./utils/helpers/setCursorLocation";
import Cursor from "./components/Cursor/Cursor";
import setCursorAppearance from "./utils/helpers/setCursorAppearance";
import reducer from "./reducers/reducer";
import sampleStore from "./utils/samples/sampleStore";
import Manifest from "./components/Manifest/Manifest";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import toggleContextMenu from "./utils/helpers/toggleContextMenu";
import hideContextMenu from "./utils/helpers/hideContextMenu";
import toast, { Toaster } from "react-hot-toast";
import Contact from "./components/Contact/Contact";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import clickSound from "./assets/audio/click.mp3";
import playAudio from "./utils/helpers/playAudio";

// Create store (redux naming convention)
export const store = createContext<any>(null);

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

function App() {
  return (
    <StoreProvider>
      <div
        className="App"
        onClick={hideContextMenu}
        onMouseMove={(e) => setCursorLocation(e)}
        onScroll={(e) => setCursorLocation(e)}
        onMouseDown={(e) => setCursorAppearance(e)}
        onMouseUp={(e) => setCursorAppearance(e)}
        onContextMenu={(e) => toggleContextMenu(e)}
      >
        <Toaster />
        <Cursor />
        <NavBar />
        <ThemeButton />
        <LanguageSwitch />
        <ContextMenu />
        <Hero />
        <Manifest />
        <AboutMe />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </StoreProvider>
  );
}

export default App;
