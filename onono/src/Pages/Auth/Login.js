import './Login.css'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../Utils/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [log, setLog] = useState(props.status)
  const navigate = useNavigate();
  props.f("unfocused")
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
        props.update()
        navigate("/profile");
    }
  }, [user, loading]);

  return (
    <div className="login">
      {/* <h1 className="logo">OnOnO D:</h1>  */}
      <div className="login__container">
        <div className="title">
          Login
        </div>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address" />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)} >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;