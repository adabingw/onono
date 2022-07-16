import React from 'react';
import StartScreen from './Pages/StartScreen/StartScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" component={StartScreen} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
