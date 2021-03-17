import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "./login.css";

function Login() {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png"
          alt=""
        />
      </div>
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
}

export default Login;
