import './Profile.css'
import { logout } from "../../Utils/Firebase.js";
import { Link, useNavigate } from "react-router-dom";

function Profile(props) {
    const navigate = useNavigate();
    props.f("unfocused")
    function handleLogout() {
        logout()
        props.update()
        navigate("/login");
    }

    return (
        <div className="Profile">
          <p>waku waku</p>
          <h3 onClick={handleLogout}>Logout</h3>
        </div>
      );
}

export default Profile

/*
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { auth, db, logout } from "../../Utils/Firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";

function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
export default Profile;
*/