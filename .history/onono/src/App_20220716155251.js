import React from 'react';
import StartScreen from './Pages/StartScreen/StartScreen';
import About from './Pages/About/About';
import { Router, Routes, Route } from 'react-router-dom';

function App() {  

  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={StartScreen} /> */}
          <Route exact path="/" element={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
