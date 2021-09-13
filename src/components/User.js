import React from "react";
import "./User.css";
function User({ user }) {
  return (
    <div className="Card">
      <img alt={user.name} src={user.img} />
      <small>Hi, My name is</small>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
