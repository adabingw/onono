import React, { useState } from 'react';
import './StartScreen.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../About';

function StartScreen() {

  // const [active, setActive] = useState(0)
  // const menu = <div className="start-flex">
  //                 <h1 className = "header noselect" onClick={id=>activePage(0)}>OnOnO D:</h1>
  //                 <h3 className = "choices noselect" onClick={id=>activePage(1)}>How to Play</h3>
  //                 <h3 className = "choices noselect" onClick={id=>activePage(2)}>Free Play</h3>
  //                 <h3 className = "choices noselect" onClick={id=>activePage(3)}>Login</h3>
  //                 <h3 className = "choices noselect" onClick={id=>activePage(4)}>About us</h3>
  //               </div>

  // function activePage(num) {
  //   setActive(num)
  // }

  // function returnPage() {
  //   if (active == 0) {
  //     return menu;
  //   } else if (active == 4) {
  //     return <About />
  //   }
  // }

  return (
    // <div>
    //   {returnPage()}
    // </div>
    // link to the about page
    <div>
      <Router>
        <Router exact path="/" component={StartScreen} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default StartScreen;