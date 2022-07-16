import React, { useState } from 'react';
import StartScreen from './Pages';
import About from './Pages/About/About';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Router exact path="/" component={StartScreen} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
