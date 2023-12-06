import React, { useState } from "react";
import WebsitePicImage from "../assets/images/Website_Pic.png";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const LogInPage1 = styled("div")({
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

const LogIn1 = styled("div")({
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

const SignUp = styled("div")({
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

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Handle login logic here
  };

  return (
    <LogInPage1>
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
        <LogInButton type="submit">
          Log In
        </LogInButton>
      </form>
      </Frame1>
      <NavBar>
        <LeetcodeStudyGroup>{`LeecoPal`}</LeetcodeStudyGroup>
        <Link to="/home"><Home>{`Home`}</Home></Link>
        <Link to="/group"><Group>{`Group`}</Group></Link>
        <Link to="/login"><LogIn1>{`Log In`}</LogIn1></Link>
        <Link to="/signup"><SignUp>{`Sign Up`}</SignUp></Link>
      </NavBar>
    </LogInPage1>
  );
}

export default LogInPage;
