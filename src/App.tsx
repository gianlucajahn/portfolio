import React, { useReducer, createContext, useEffect, useContext } from "react";
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
        onMouseMove={(e) => setCursorLocation(e)}
        onScroll={(e) => setCursorLocation(e)}
        onMouseDown={(e) => setCursorAppearance(e)}
        onMouseUp={(e) => setCursorAppearance(e)}
      >
        <Cursor />
        <NavBar />
        <LanguageSwitch />
        <Hero />
        <Manifest />
      </div>
    </StoreProvider>
  );
}

export default App;
