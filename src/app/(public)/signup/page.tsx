"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    const response = await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const safeResponse = await response.json();
    console.log(safeResponse, typeof safeResponse);
    // const stripped = safeResponse.replace(")]}", "");
    // console.log(stripped, typeof stripped);
  };

  const formInputsClasses = `flex flex-col justify-center items-start `;

  return (
    <div className={`flex flex-col w-full h-full justify-center items-center`}>
      <h1 className="text-4xl mb-10">Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={`${styles["form-control"]} ${formInputsClasses}`}>
          <label htmlFor="username" className={`${styles["label"]}`}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            className={`${styles["input"]}`}
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={`${styles["form-control"]} ${formInputsClasses}`}>
          <label htmlFor="email" className={`${styles["label"]}`}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className={`${styles["input"]}`}
            onChange={handleEmailChange}
          />
        </div>
        <div className={` ${styles["form-control"]} ${formInputsClasses}`}>
          <label htmlFor="password" className={`${styles["label"]}`}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className={`${styles["input"]}`}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className={`${styles["button"]} w-full border rounded`}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
