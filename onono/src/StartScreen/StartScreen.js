import './StartScreen.css'
import { useState } from 'react'
import About from '../About/About.js'

function StartScreen() {
  return (
    <div className="start-flex">
      <h1 className = "header noselect">OnOnO D:</h1>
      <h3 className = "choices noselect">How to Play</h3>
      <h3 className = "choices noselect">Free Play</h3>
      <h3 className = "choices noselect">Login</h3>
      <h3 className = "choices noselect">About us</h3>
    </div>
  );
}

export default StartScreen;