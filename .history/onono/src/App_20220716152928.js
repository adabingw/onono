import './App.css';
import StartScreen from 
import { useState } from 'react';

function App() {

  const [active,setActive] = useState(0)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <StartScreen />
    //   </header>
    // </div>
    <div>
      <StartScreen />
    </div>
  );
}

export default App;
