import React, { useState } from 'react';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {  

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
