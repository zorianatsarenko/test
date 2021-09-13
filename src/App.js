import React, { useState } from "react";
import Login from "../src/components/Login";
import User from "../src/components/User";
import Error from "../src/components/Error";

import "./App.css";
const data = require("./components/data/users.json");

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    let user = data.filter((user) => {
      console.log(user);
      return user.password === password && user.email === email;
    });
    setUser(user[0]);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const render = () => {
    if (isLoggedIn) {
      if (user) {
        return <User user={user} />;
      }
      return <Error />;
    }
    return (
      <Login
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
    );
  };
  return <div className="App">{render()}</div>;
}

export default App;
