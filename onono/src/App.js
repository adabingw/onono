import './App.css';
import StartScreen from './StartScreen/StartScreen.js'
import About from './About/About.js'
import { useState } from 'react'

function App() {

  const [active,setActive] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <StartScreen />
      </header>
    </div>
  );
}

export default App;
