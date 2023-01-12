import React, { useContext } from 'react';
import { store } from '../../App';
import './ThemeButton.scss';

export default function ThemeButton () {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`theme-button ${state.darkmode ? "dark-theme-button" : "light-theme-button"}`}>
      
    </div>
  );
}
