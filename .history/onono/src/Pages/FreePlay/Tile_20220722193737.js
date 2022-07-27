import React from 'react';
import './Tile.css';
import wrap_mon from './wrap_mon.png';
import maxresdefault from './maxresdefault.jpg';
import hepl from './hepl.jpg';
import { blank, blue, green } from '../../../src'
import { useState } from 'react';

function Tile(props) {
  const [background, setBackground] = useState(props.src)
  const [id, setId] = useState(props.id)

  function updateTile(id) {
    // console.log("waku waku");
    if (id == 1) {
      // console.log(id);
      setBackground(wrap_mon);
      setId(2);
    } else if (id == 2) {
      // console.log(id);
      setBackground(maxresdefault);
      setId(3);
    } else {
      // console.log(id);
      setBackground(hepl);
      setId(1);
    }
  }

  return (
    <img src={background} height="150" width="150" onClick={e => updateTile(id)} />
  );
}

export default Tile