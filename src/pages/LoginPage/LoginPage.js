import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        alert("Email/Password Incorrect");
        resetForm();
        throw new Error("Login Failed");
      }

      const result = await response.json();
      console.log("Login Successful", result);
      alert("Login Successful");
      navigate("/group");
    } catch (e) {
      console.error("Error Occurred", e);
    }
  };

  return (
    <div className={style.container}>
      <form class={style.form} onSubmit={handleSubmit}>
        <h2>Log in now! 😈</h2>
        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email Address"
          className={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          className={style.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className={`${style.button} ${style.buttonPrimary}`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
