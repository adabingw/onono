import React from 'react';
import './Tile.css';
import wrap_mon from './wrap_mon.png';
import maxresdefault from './maxresdefault.jpg';
import hepl from './hepl.jpg';
import blank from '../../../src/Assets/blank.png';
import blue from '../../../src/Assets/blue.png';
import green from '../../../src/Assets/green.png';
import { useState } from 'react';

function Tile(props) {
  const [background, setBackground] = useState(props.src)
  const [id, setId] = useState(props.id)

  function updateTile(id) {
    // console.log("waku waku");
    if (id == 0) {
      // console.log(id);
      setBackground(blue);
      setId(1);
    } else if (id == 1) {
      // console.log(id);
      setBackground(green);
      setId(2);
    } else {
      // console.log(id);
      setBackground(blank);
      setId(0);
    }
  }

  return (
    <img src={background} height="150" width="150" onClick={e => updateTile(id)} />
  );
}

export default Tile