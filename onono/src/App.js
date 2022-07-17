import React from 'react';
import FreePlay from './Pages/FreePlay/FreePlay.js'
import Profile from './Pages/Profile/Profile.js'
import About from './Pages/About/About.js';
import Login from './Pages/Login/Login.js';
import ErrorPage from './Pages/ErrorPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import firebase from 'firebase/compat/app';

function App() {  

  const [focus, setFocus] = useState("focused")
  const [current, setCurrent] = useState("home")
  const [openGame, setOpenGame] = useState(false)
  const [openLog, setOpenLog] = useState(false)
  const [login, setLogin] = useState()

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

    if (current == "freeplay") {
      console.log("current: " + current)
      setOpenGame(true)
    } else if (current == "login") {
      console.log(current)
      setOpenLog(true)
    }
  }

  function handleCloseGame() {
    openGame(false)
  }

  function handleCloseLog() {
    openLog(false)
  }

  function setLogOut() {
    setLogin(!login)
  }

  const logoutHandler = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
  }

  const handleLogin = () => {
    console.log("handleLogin clicked")
    setLogin(true)
  }

  const handleLogout = () => {
    console.log("handleLogout clicked")
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
          { //Check if message failed
            (login == true)
              ? <Link to="/login" onClick={e=>changeFocus("unfocused", "login")} className = {focus} update={()=>handleLogin} test="1"> Login </Link>
              : <Link to="/profile" onClick={e=>changeFocus("unfocused", "profile")} className = {focus} update={()=>handleLogout}> Profile </Link>
          }
        </nav>
        <Routes>
          <Route exact path="/freeplay" element={<FreePlay />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<ErrorPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
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
            }}>New Game?</Button>
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
