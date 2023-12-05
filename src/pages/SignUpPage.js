import React from 'react';

import WebsitePicImage from '../assets/images/Website_Pic.png';

import SignUpImage from '../assets/images/Website_Pic.png';

import { styled } from '@mui/material/styles';


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

const SignUpButton = styled("div")({
  backgroundColor: `rgba(110, 178, 86, 0.2)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  border: `1px solid rgba(49, 226, 98, 1)`,
  boxSizing: `border-box`,
  borderRadius: `20px`,
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

const SignUp = styled("img")({
  height: `43px`,
  width: `118px`,
  margin: `0px`,
});

const ConfirmPasswordInput = styled("input")({
  width: `310px`,
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
  width: `310px`,
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

const UserNameInput = styled("input")({
  width: `310px`,
  position: `absolute`,
  left: `85px`,
  top: `120px`,
});

const UserName = styled("div")({
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
  return (
    <SignUpPage1>
      <WebsitePic src={WebsitePicImage} loading='lazy' alt={"Website Pic"}/>
      <Frame1>
      <UserNameInput type="text" placeholder="UserName" />
        <UserName>
          {`UserName:`}
        </UserName>
        <PasswordInput type="password" placeholder="Password" />
        <Password>
          {`Password:`}
        </Password>
        <ConfirmPasswordInput type="password" placeholder="ConfirmPassword" />
        <ConfirmPassword>
          {`Confirm Password:`}
        </ConfirmPassword>
        <SignUpButton>
          <SignUp src={SignUpImage} loading='lazy' alt={"Sign Up"}/>
        </SignUpButton>
      </Frame1>
      <NavBar>
        <LeetcodeStudyGroup>
          {`Leetcode Study Group`}
        </LeetcodeStudyGroup>
        <Home>
          {`Home`}
        </Home>
        <Group>
          {`Group`}
        </Group>
        <LogIn>
          {`Log In`}
        </LogIn>
        <SignUp1>
          {`Sign Up`}
        </SignUp1>
      </NavBar>
    </SignUpPage1>);

  }

export default SignUpPage;

