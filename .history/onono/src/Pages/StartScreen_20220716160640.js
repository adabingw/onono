import React, { useState } from 'react';
import About from './About.js';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [active,setActive] = useState(0)

  return (
    <div>
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
