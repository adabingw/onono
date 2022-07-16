import './App.css';
import StartScreen from './Pages/StartScreen/StartScreen';
import { useState } from 'react';
import React, { useState } from 'react';
import './StartScreen.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../About/About';

function App() {

  const [active,setActive] = useState(0)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <StartScreen />
    //   </header>
    // </div>
    <div>
      <Router>
        <Router exact path="/" component={StartScreen} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
