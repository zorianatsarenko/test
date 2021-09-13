import React from "react";
import "./Login.css";
const data = require("./data/users.json");

console.log(data);
function Login({ handleSubmit, handleEmailChange, handlePasswordChange }) {
  return (
    <div className="Login">
      <form className="Form" onSubmit={(e) => handleSubmit(e)}>
        <input
          autoFocus
          className="Input"
          onChange={(e) => handleEmailChange(e)}
          placeholder="email"
        />
        <input
          className="Input"
          onChange={(e) => handlePasswordChange(e)}
          placeholder="password"
        />
        <button className="Button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
