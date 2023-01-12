import React, { useContext } from 'react';
import { store } from '../../App';
import './Cursor.scss';

export default function Cursor () {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`cursor ${state.darkmode ? "dark-cursor" : "light-cursor"}`} id="cursor">

    </div>
  );
}
