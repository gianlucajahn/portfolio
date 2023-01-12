import React, { useContext } from 'react';
import { store } from '../../App';
import './Image.scss';

export interface ImageProps {
    source: string;
    name: string;
}

export default function Image (props: ImageProps) {
  const {
    source,
    name
  } = props;

  const [state, dispatch] = useContext(store);

  return (
    <div className="skill-tab-item">
        <img className="skill-tab-item" src={require(`../../assets/images/${source}.png`)} />
        <h3 className={`${state.darkmode ? "dark-eyebrow" : "light-heading"}`}>{name}</h3>
    </div>
  );
}
