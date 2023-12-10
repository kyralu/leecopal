import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SignUpPage.module.css";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [leetcodeId, setLeetcodeId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleCancel  = (event) => {
    event.preventDefault();
    navigate("/");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isEmail(email)) {
      resetForm();
      alert("Please enter valid email!");
      return;
    }
    if(!leetcodeId) {
      resetForm();
      alert("Please enter valid LeetCode ID!");
      return;
    }
    if (password !== confirmPassword) {
      resetForm();
      alert("Passwords do not match.");
      return;
    }
    const userData = {
      email,
      password,
      leetcodeId,
    };
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 409) {
        const result = await response.json();
        console.log("Signed Up Failed:", result.message);
        resetForm();
        alert("User Already Exists");
      } else if (!response.ok) {
        throw new Error("Failed to Sign Up");
      } else {
        const result = await response.json();
        console.log("Sign up Successful:", result);
        alert("User Successfully Created");
        navigate("/login");
      }
    } catch (error) {
      console.log("Sign up Failed", error);
    }
  };

  return (
    <div className={style.container}>
      <form class={style.form} onSubmit={handleSubmit}>
        <h2>Ready to Sign Up? 🤓</h2>
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
        <label className={style.label} htmlFor="leetcodeId">
          LeetCode ID
        </label>
        <input
          type="text"
          id="leetcodeId"
          placeholder="LeetCode ID"
          className={style.input}
          value={leetcodeId}
          onChange={(e) => setLeetcodeId(e.target.value)}
        />
        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className={style.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className={style.label} htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          className={style.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={handleCancel}>Cancel</button>
          <button
            type="submit"
            className={`${style.button} ${style.buttonPrimary}`}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
