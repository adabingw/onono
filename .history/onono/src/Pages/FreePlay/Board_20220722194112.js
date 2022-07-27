/**
 * Returns Board component that includes tiles
 */

import React from 'react'
import './Board.css'
// import wrap_mon from './wrap_mon.png'
// import maxresdefault from './maxresdefault.jpg'
// import hepl from './hepl.jpg'
import blank from '../../../src/Assets/blank.png';
import blue from '../../../src/Assets/blue.png';
import green from '../../../src/Assets/green.png';
import Tile from './Tile.js'

function Board(props) {
  var board = [[0, 1, 0, 0], [0, 1, 0, 1], [0, 0, 2, 0], [0, 0, 0, 0]];
  var finalBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  const size = props.size;
  var tiles = [];
  var tiles_id = [];

  for (var i = 0; i < 4; i++) {
    tiles[i] = new Array(4);
    tiles_id[i] = new Array(4);
    for (var j = 0; j < tiles[i].length; j++) {
      const num = Math.floor(3 * Math.random());
      tiles_id[i][j] = num;
      if (num == 0) {
        tiles[i][j] = h;
      } else if (num == 1) {
        tiles[i][j] = wrap_mon;
      } else {
        tiles[i][j] = maxresdefault;
      }
    }
  }

  function updateTileID(row, col, id) {
    if (id == 1) {
      tiles_id[row][col] = 2
    } else if (id == 2) {
      tiles_id[row][col] = 3
    } else {
      tiles_id[row][col] = 1
    }
  }

  return (
    <div className="board-col">
      <div className="board-row">
        <Tile src={tiles[0][0]} id={tiles_id[0][0]} onClick={e => updateTileID(0, 0, tiles_id[0][0])} />
        <Tile src={tiles[0][1]} id={tiles_id[0][1]} onClick={e => updateTileID(0, 1, tiles_id[0][1])} />
        <Tile src={tiles[0][2]} id={tiles_id[0][2]} onClick={e => updateTileID(0, 2, tiles_id[0][2])} />
        <Tile src={tiles[0][3]} id={tiles_id[0][3]} onClick={e => updateTileID(0, 3, tiles_id[0][3])} />
      </div>
      <div className="board-row">
        <Tile src={tiles[1][0]} id={tiles_id[1][0]} onClick={e => updateTileID(1, 0, tiles_id[1][0])} />
        <Tile src={tiles[1][1]} id={tiles_id[1][1]} onClick={e => updateTileID(1, 1, tiles_id[1][1])} />
        <Tile src={tiles[1][2]} id={tiles_id[1][2]} onClick={e => updateTileID(1, 2, tiles_id[1][2])} />
        <Tile src={tiles[1][3]} id={tiles_id[1][3]} onClick={e => updateTileID(1, 3, tiles_id[1][3])} />
      </div>
      <div className="board-row">
        <Tile src={tiles[2][0]} id={tiles_id[2][0]} onClick={e => updateTileID(2, 0, tiles_id[2][0])} />
        <Tile src={tiles[2][1]} id={tiles_id[2][1]} onClick={e => updateTileID(2, 1, tiles_id[2][1])} />
        <Tile src={tiles[2][2]} id={tiles_id[2][2]} onClick={e => updateTileID(2, 2, tiles_id[2][2])} />
        <Tile src={tiles[2][3]} id={tiles_id[2][3]} onClick={e => updateTileID(2, 3, tiles_id[2][3])} />
      </div>
      <div className="board-row">
        <Tile src={tiles[3][0]} id={tiles_id[3][0]} onClick={e => updateTileID(3, 0, tiles_id[3][0])} />
        <Tile src={tiles[3][1]} id={tiles_id[3][1]} onClick={e => updateTileID(3, 1, tiles_id[3][1])} />
        <Tile src={tiles[3][2]} id={tiles_id[3][2]} onClick={e => updateTileID(3, 2, tiles_id[3][2])} />
        <Tile src={tiles[3][3]} id={tiles_id[3][3]} onClick={e => updateTileID(3, 3, tiles_id[3][3])} />
      </div>
    </div>
  );
}

export default Board