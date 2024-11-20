/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
  const userArr = JSON.parse(localStorage.getItem("users")) || [];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // alert(`Username: ${username} and Useremail: ${email}`);
    let userObj = {
      name: username,
      email: email,
      password: password,
    };
    userArr.push(userObj);
    localStorage.setItem("users", JSON.stringify(userArr));
    alert("successfully registed");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="flex justify-center mt-5 flex-col items-center gap-3">
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={handleChange}
          className="bg-slate-500 text-white"
        />
        <input
          type="email"
          placeholder="Useremail"
          required
          value={email}
          className="bg-slate-500 text-white"
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Userpassword"
          value={password}
          required
          className="bg-slate-500 text-white"
          onChange={handlePassword}
        />

        <button onClick={handleSubmit} className="bg-red-500 text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
