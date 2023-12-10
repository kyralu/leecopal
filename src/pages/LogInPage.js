import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const LogInButton = styled("button")({
  // backgroundColor: `rgba(110, 178, 86, 0.2)`,
  // boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  // border: `1px solid rgba(49, 226, 98, 1)`,
  // boxSizing: `border-box`,
  // borderRadius: `20px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px`,
  left: `182px`,
  top: `476px`,
  height: `63px`,
  width: `116px`,
});

const PasswordInput = styled("input")({
  width: `400px`,
  position: `absolute`,
  left: `85px`,
  top: `340px`,
});

const Password = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inria Sans`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `196px`,
  height: `45px`,
  position: `absolute`,
  left: `85px`,
  top: `246px`,
});

const EmailInput = styled("input")({
  width: `400px`,
  position: `absolute`,
  left: `85px`,
  top: `157px`,
});

const Email = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inria Sans`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `196px`,
  height: `45px`,
  position: `absolute`,
  left: `85px`,
  top: `63px`,
});




function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const resetForm = () => {
    setEmail("");
    setPassword("");
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
    <form onSubmit={handleSubmit}>
      <EmailInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Email>{`Email:`}</Email>
      <PasswordInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Password>{`Password:`}</Password>
      <LogInButton type="submit">Log In</LogInButton>
    </form>
  );
}

export default LogInPage;
