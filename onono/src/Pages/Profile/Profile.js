import './Profile.css'
// import { logout, fetchScore } from "../../Utils/Firebase.js";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../Utils/Firebase.js";
import { query, collection, getDocs, where, doc, setDoc } from "firebase/firestore";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { updateEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBj0BTTfwrGYB1KHdDFN-37CkWC1jLDkhs",
  authDomain: "onono-2dfd4.firebaseapp.com",
  projectId: "onono-2dfd4",
  storageBucket: "onono-2dfd4.appspot.com",
  messagingSenderId: "996552087372",
  appId: "1:996552087372:web:4b39f8776288cf0bbe61e9",
  measurementId: "G-W9MPJV0EEE"
};
const app = initializeApp(firebaseConfig);

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

function Profile(props) {
  const [user, loading, error] = useAuthState(auth);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const [openEmail, setOpenEmail] = useState(false)
  const [openName, setOpenName] = useState(false)
  const [email, setEmail] = useState(user?.email)
  const [name, setName] = useState(user?.name)

  const fetchUserData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "UserScores"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        if (user?.email == `${doc.id}`) {
            const s = JSON.stringify(doc.get("score"));
            console.log(typeof s)
            console.log(s);
            setScore(s)
        }
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  function handleCloseEmail() {
    setOpenEmail(false)
  }

  function handleOpenEmail() {
    setOpenEmail(true)
  }

  function handleCloseName() {
    setOpenName(false)
  }

  function handleOpenName() {
    setOpenName(true)
  }

  const changeEmail = async(email) => {
    db.collection("UserScores").doc(email).update({email: email});
    if (user != null){
      user.sendEmailVerification();
    }
  }

  const changeName = async(name) => {
    console.log("yes")
    const docRef = doc(db, "UserScores", user?.email);
    // docRef.update({
    //   name: name
    // })
    // .then(() => {
    //   console.log('User updated!');
    // });

    setDoc(docRef, {
      name: name,
    }, {
      merge: true
    }).then(() => console.log("Document updated"));
    console.log("yes yes")
    // collection("UserScores").doc(user?.name).update({name: name});
  }

  const handleEmailChange = (e) => {
    setEmail(e)
  }

  const handleNameChange = (e) => {
    setName(e)
  }

  useEffect(() => {
    if (loading) return;
    console.log(user)
    if (!user) return navigate("/login");
  }, [user, loading]);

  props.f("unfocused")

  function handleLogout() {
      logout()
      props.update()
      navigate("/login");
  }

  

  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>
            <h1>
            {user?.displayName}
            </h1>
            <div><span className="glow" onClick={() => handleOpenName()}>edit name</span></div>
         </div>

          <div className="row">
            <div className="col-titles">
              <div>email </div>
              <div>high score </div>
            </div>
            <div className="col">
              <div>{user?.email}</div>
              <div>{score}</div>
            </div>
            <div className="col">
              <div><span className="glow" onClick={() => handleOpenEmail()}>change</span></div>
              <div><span className="glow">leaderboard</span></div>
            </div>
          </div>
         <button className="dashboard__btn" onClick={handleLogout}>
          L O G O U T
         </button>
       </div>
       <Modal
        open={openEmail}
        onClose={handleCloseEmail} >
        <Box sx={style}>
          <TextField
          onChange={e=>handleEmailChange(e.target.value)}>
          </TextField>
          <Button
            style={{
              color: "#696969",
              fontSize: "15px",
              fontFamily: 'Outfit',
              marginLeft: '15px',
            }} onClick={e=>changeEmail(email)}>SET EMAIL</Button>
        </Box>
      </Modal>

      <Modal
        open={openName}
        onClose={handleCloseName} >
        <Box sx={style}>
          <TextField
            onChange={e=>handleNameChange(e.target.value)}>
          </TextField>
          <Button
            style={{
              color: "#696969",
              fontSize: "15px",
              fontFamily: 'Outfit',
              marginLeft: '15px',
            }} onClick={e=>changeName(name)}> SET NAME </Button>
        </Box>
      </Modal>
     </div>
  );
}
export default Profile;