import React, { useState } from "react";
import WebsitePicImage from "../assets/images/Website_Pic.png";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const SignUpPage1 = styled("div")({
  backgroundColor: `rgba(104, 100, 100, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const WebsitePic = styled("img")({
  height: `293px`,
  width: `518px`,
  position: `absolute`,
  left: `195px`,
  top: `261px`,
});

const Frame1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `525px`,
  height: `708px`,
  left: `728px`,
  top: `192px`,
  overflow: `hidden`,
});

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

const NavBar = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1065px`,
  height: `46px`,
  left: `188px`,
  top: `50px`,
});

const LeetcodeStudyGroup = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Irish Grover`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  WebkitTextStroke: `1px rgba(0, 0, 0, 1)`,
  position: `absolute`,
  left: `0px`,
  top: `1px`,
});

const Home = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Istok Web`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `518px`,
  top: `0px`,
});

const Group = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Istok Web`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `661px`,
  top: `0px`,
});

const LogIn = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Istok Web`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `807px`,
  top: `0px`,
});

const SignUp1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Istok Web`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `953px`,
  top: `0px`,
});

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password, "Confirm Password:", confirmPassword);
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userData = {
      email,
      password
    };

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to Sign Up');
      }

      const result = await response.json();
      console.log('Sign up Successful:', result);
    } catch (error) {
      console.log('Sign up Failed', error);
    }
  };
  return (
    <SignUpPage1>
      <WebsitePic src={WebsitePicImage} loading="lazy" alt={"Website Pic"} />
      <Frame1>
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
        <SignUpButton type="submit">
          Sign Up
        </SignUpButton>
      </form>
      </Frame1>
      <NavBar>
        <LeetcodeStudyGroup>{`LeecoPal`}</LeetcodeStudyGroup>
        <Link to="/home"><Home>{`Home`}</Home></Link>
        <Link to="/group"><Group>{`Group`}</Group></Link>
        <Link to="/login"><LogIn>{`Log In`}</LogIn></Link>
        <Link to="/signup"><SignUp1>{`Sign Up`}</SignUp1></Link>
      </NavBar>
    </SignUpPage1>
  );
}

export default SignUpPage;
