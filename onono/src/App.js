import React from 'react';
import FreePlay from './Pages/FreePlay/FreePlay.js'
import Profile from './Pages/Profile/Profile.js'
import About from './Pages/About/About.js';
import Login from './Pages/Auth/Login.js';
import Register from './Pages/Auth/Register.js';
import Reset from './Pages/Auth/Reset.js';
import ErrorPage from './Pages/ErrorPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useHistory } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Leaderboard from './Pages/Leaderboard/Leaderboard.js';

function App(props) {  

  const [focus, setFocus] = useState("focused")
  const [current, setCurrent] = useState("home")
  const [openGame, setOpenGame] = useState(false)
  const [openLog, setOpenLog] = useState(false)
  const [login, setLogin] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex', 
    justifyContent: 'center',
  };

  function changeFocus(f, currentPage) {
    setFocus(f)
    setCurrent(currentPage)

    if (current == "freeplay" && currentPage == "freeplay") {
      setOpenGame(true)
      setFocus("unfocused")
    } else if (current == "login") {
      setOpenLog(true)
      setFocus("unfocused")
    } else {
      setOpenLog(false)
      setOpenGame(false)
      setFocus("unfocused")
    }
  }

  function changeFocus2(f) {
    setFocus(f)
  }

  function handleCloseGame() {
    setOpenGame(false)
  }

  function handleCloseLog() {
    setOpenLog(false)
  }

  function setLogOut() {
    setLogin(!login)
  }

  const handleLogin = () => {
    setLogin(true)
  }

  const handleLogout = () => {
    setLogin(false)
  }

  return (
    <div>
      <Router>
        <nav className = {"nav " + focus}>
          <h1 className = {focus}>OnOnO D:</h1>
          <Link to="/freeplay" onClick={e=>changeFocus("unfocused", "freeplay")} className = {focus}> FreePlay </Link>
          <Link to="/about" onClick={e=>changeFocus("unfocused", "about")} className = {focus}> About </Link>
          <Link to="*" onClick={e=>changeFocus("unfocused", "error")} className = {focus}> Error </Link>
          <Link to="/leaderboard" onClick={e=>changeFocus("unfocused", "error")} className = {focus}> Leaderboard </Link>
          { 
            (login == false)
              ? <Link to="/login" onClick={e=>changeFocus("unfocused", "login")} className = {focus}> Profile </Link>
              : <Link to="/profile" onClick={e=>changeFocus("unfocused", "profile")} className = {focus}> Profile </Link>
          }
        </nav>
        <Routes>
          <Route exact path="/freeplay" element={<FreePlay f={changeFocus2}/>} />
          <Route exact path="/about" element={<About f={changeFocus2}/>} />
          <Route exact path="*" element={<ErrorPage f={changeFocus2}/>} />
          <Route exact path="/login" element={<Login  update={handleLogin} f={changeFocus2}/>} />
          <Route exact path="/profile" element={<Profile  update={handleLogout} f={changeFocus2}/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/reset" element={<Reset />}/>
          <Route exact path="/leaderboard" element={<Leaderboard f={changeFocus2}/>}/>
        </Routes>
      </Router>
      <Modal
        open={openGame}
        onClose={handleCloseGame} >
        <Box sx={style}>
          <Button
            style={{
              color: "#696969",
              fontSize: "15px", 
              fontFamily: 'Outfit',
              marginRight: "100px",
            }} >New Game?</Button>
            {/* onClick={() => navigate('/freeplay')} */}
            {/* ^ move this up when navigate() finished lol */}
          <Button
            style={{
              color: "#696969",
              fontSize: "15px",
              fontFamily: 'Outfit',
            }} onClick={e=>handleCloseGame()}>Resume</Button>
        </Box>
      </Modal>

      <Modal
        open={openLog}
        onClose={handleCloseLog} >
        <Box sx={style}>
          <Button
            style={{
              color: "#696969",
              fontSize: "15px", 
              fontFamily: 'Outfit',
              marginRight: "100px",
            }}  onClick={e=>setLogOut()} >LOGOUT</Button>
          <Button
            style={{
              color: "#696969",
              fontSize: "15px",
              fontFamily: 'Outfit',
            }}>Nah, I like this game :) </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
