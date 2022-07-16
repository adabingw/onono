import React, { useState } from 'react';
import About from './Pages/About';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/about" component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
