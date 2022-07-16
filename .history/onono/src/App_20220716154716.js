import React, { useState } from 'react';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {  

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Router>
          <Route exact path="/about" component={About} />
        </Routesh>
      </Router>
    </div>
  );
}

export default App;
