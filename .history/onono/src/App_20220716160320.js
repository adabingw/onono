import React from 'react';
import StartScreen from './Pages/StartScreen';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
