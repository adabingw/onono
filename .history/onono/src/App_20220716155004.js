import React from 'react';
import About from './Pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" component={StartScreen}} />
          <Route exact path="/about" component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
