import React from 'react';
import StartScreen from './Pages/js/StartScreen';
import FreePlay from './Pages/js/FreePlay/FreePlay'
import About from './Pages/js/About';
import ErrorPage from './Pages/js/ErrorPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {  

  const [focus, setFocus] = useState("focused")

  function changeFocus(f) {
    setFocus(f)
  }

  return (
    <div>
      <Router>
        <nav className = {"nav " + focus}>
          <h1 className = {focus}>OnOnO D:</h1>
          <Link to="/freeplay" onClick={e=>changeFocus("unfocused")} className = {focus}> FreePlay </Link>
          <Link to="/about" onClick={e=>changeFocus("unfocused")} className = {focus}> About </Link>
          <Link to="*" onClick={e=>changeFocus("unfocused")} className = {focus}> Error </Link>
        </nav>
        <Routes>
          <Route exact path="/freeplay" element={<FreePlay />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
