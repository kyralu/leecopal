import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const SignUpButton = styled("button")({
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
  left: `158px`,
  top: `503px`,
  height: `63px`,
  width: `138px`,
});

const ConfirmPasswordInput = styled("input")({
  width: `400px`,
  position: `absolute`,
  left: `86px`,
  top: `406px`,
});

const ConfirmPassword = styled("div")({
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
  width: `320px`,
  height: `49px`,
  position: `absolute`,
  left: `86px`,
  top: `329px`,
});

const PasswordInput = styled("input")({
  width: `400px`,
  position: `absolute`,
  left: `86px`,
  top: `261px`,
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
  left: `86px`,
  top: `188px`,
});

const EmailInput = styled("input")({
  width: `400px`,
  position: `absolute`,
  left: `85px`,
  top: `120px`,
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
  top: `47px`,
});



function SignUpPage() {
  const [email, setEmail] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmail(email)) {
      resetForm();
      alert("Please enter valid email!");
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
      <ConfirmPasswordInput
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <ConfirmPassword>{`Confirm Password:`}</ConfirmPassword>
      <SignUpButton type="submit">Sign Up</SignUpButton>
    </form>
  );
}

export default SignUpPage;
