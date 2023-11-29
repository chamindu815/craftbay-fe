import React, { useState } from "react";
import "./Login.css";
import login from "../Assets/Login.jpg";

export const Login = () => {
  const [action, setAction] = useState("Login");

  return (

    <div className="main-container">
        <div className="image-container">
            <p>fasdfsafa</p>
        </div>
        <div className="login-form-container"></div>
    </div>

    // <div className="flex-container">
    //   <div className="img-container">
    //  </div>

    //   <div className="container">
    //     <div className="header">
    //       <div className="text">{action}</div>
    //       <div className="underline"></div>
    //     </div>

    //     <div className="inputs">
    //       <div className="input">
    //         <input type="email" placeholder="Email" />
    //       </div>

    //       <div className="input">
    //         <input type="password" placeholder="Password" />
    //       </div>
    //     </div>

    //     <div className="forgot-password">
    //       <span>Forgot Password? </span>
    //     </div>

    //     <div className="submit-container">
    //       <div
    //         className={action == "Sign Up" ? "submit gray" : "submit"}
    //         onClick={() => {
    //           setAction("Login");
    //         }}
    //       >
    //         Login
    //       </div>
    //       <div
    //         className={action == "Login" ? "submit gray" : "submit"}
    //         onClick={() => {
    //           setAction("Sign Up");
    //         }}
    //       >
    //         Sign Up
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
