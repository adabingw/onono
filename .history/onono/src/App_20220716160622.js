import React from 'react';
import StartScreen from './Pages/StartScreen';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {  

  return (
    <Router>
      <nav>
        <Link to="/"> StartScreen </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<StartScreen />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
