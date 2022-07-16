import React, { useState } from 'react';
import StartScreen from './Pages/StartScreen/StartScreen';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/startScreen" element={<StartScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
