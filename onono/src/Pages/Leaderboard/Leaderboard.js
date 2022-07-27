import './Leaderboard.css'
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, fetchScore } from "../../Utils/Firebase.js";
import { query, collection, getDocs, where, doc } from "firebase/firestore";

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

function Leaderboard(props) {
  const [user, loading, error] = useAuthState(auth);
  const [usernames, setUsernames] = useState([]);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      // const users = new Map()
      const users = []
      const querySnapshot = await getDocs(collection(db, "UserScores"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        if (doc.get("name") != undefined) {
          users.push({name: doc.get("name"), score: doc.get("score")})
        }
      });
      setUsernames(users);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  props.f("unfocused")

  function getScores() {
    if (usernames == null || usernames == undefined || usernames == []) {
      // fetchUserData()
    }
    console.log(usernames)
    const list = usernames.map(user =>  
      <div className="cols-elements">{user.score}</div>
    );  
    return list;
  }

  function getNames() {
    if (usernames == null || usernames == undefined || usernames == []) {
      // fetchUserData()
    }
    console.log(usernames)
    const list = usernames.map(user =>  
      <div className="cols-elements">{user.name}</div>
    );  
    return list;
  }

  return (
    <div className="dashboard">
       <div className="dashboard__container">
         <div>
            <h1>
            Leaderboard
            </h1>
         </div>

          {/* <div className="row">
            <div className="cols-elements">
              <h2>name</h2>
              {getNames()}
            </div>
            <div className="cols-elements">
              <h2>score</h2>
              {getScores()}
            </div>
          </div> */}
          <h3>there was a problem fetching the leaderboard D:</h3>
       </div>
     </div>
  );
}
export default Leaderboard;