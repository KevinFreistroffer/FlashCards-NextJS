"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const LoginPage: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);

  const handleUsernameOrEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameOrEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleStaySignedInOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setStaySignedIn(!staySignedIn);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameOrEmail, password, staySignedIn }),
    });

    if (response.status === 200) {
      const json = await response.json();
      console.log(json, typeof json);

      if (json.jwtToken) {
        localStorage.setItem("jwtToken", json.jwtToken);
      }
    }
  };

  const formInputsClasses = `flex flex-col justify-center items-start `;

  return (
    <div className={`flex flex-col w-full h-full justify-center items-center`}>
      <h1 className="text-4xl mb-10">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={`${styles["form-control"]} ${formInputsClasses}`}>
          <label htmlFor="username" className={`${styles["label"]}`}>
            Username or email:
          </label>
          <input
            type="text"
            id="username"
            className={`${styles["input"]}`}
            value={usernameOrEmail}
            onChange={handleUsernameOrEmailChange}
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
        </div>{" "}
        <div className={` ${styles["form-control"]} ${formInputsClasses}`}>
          <label htmlFor="staySignedIn" className={`${styles["label"]}`}>
            Stay signed in?
          </label>
          <input
            type="checkbox"
            id="staySignedIn"
            checked={staySignedIn}
            className={`${styles["input"]}`}
            onChange={handleStaySignedInOnChange}
          />
          {staySignedIn.toString()}
        </div>
        <button
          className={`${styles["button"]} w-full border rounded`}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
