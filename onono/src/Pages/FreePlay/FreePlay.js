import React from 'react';
import Board from './Board.js'

function FreePlay(props) {
  props.f("unfocused")
    return (
        <div className="FreePlay">
          <Board />
        </div>
      );
}

export default FreePlay

/**
 * stuff: 
 * - motivational text
 * - board
 * - % done
 * - hints
 * - if click FreePlay from FreePlay: 
 * ask: newGame?
 * if yes, chooseSize
 * if not, resume game
 */