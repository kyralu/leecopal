import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const GroupQuestionPage1 = styled("div")({
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
  width: `124px`,
  height: `65px`,
  left: `158px`,
  top: `503px`,
});

const Post = styled("button")({
  height: `43px`,
  width: `69px`,
  margin: `0px`,
});

const QuestionInput = styled("input")({
  width: `310px`,
  height: `207px`,
  position: `absolute`,
  left: `86px`,
  top: `261px`,
});

const Question = styled("div")({
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

const QuestionTitleInput = styled("input")({
  width: `310px`,
  position: `absolute`,
  left: `85px`,
  top: `120px`,
});

const QuestionTitle = styled("div")({
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
  width: `311px`,
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

const LogOut = styled("div")({
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
  width: `120.39px`,
  height: `45.02px`,
  position: `absolute`,
  left: `816px`,
  top: `0px`,
});

const User = styled("div")({
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
  width: `67.91px`,
  height: `45.02px`,
  position: `absolute`,
  left: `997px`,
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
  width: `90.55px`,
  height: `45.02px`,
  position: `absolute`,
  left: `680px`,
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
  width: `86.43px`,
  height: `45.02px`,
  position: `absolute`,
  left: `533px`,
  top: `1px`,
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
  width: `383.81px`,
  height: `43.06px`,
  position: `absolute`,
  left: `0px`,
  top: `2px`,
});

function GroupQuestionPage() {
  return (
    <GroupQuestionPage1>
      <Frame1>
        <SignUpButton type="submit">
          Post
        </SignUpButton>
        <QuestionInput />
        <Question>{`Question:`}</Question>
        <QuestionTitleInput />
        <QuestionTitle>{`Question Title:`}</QuestionTitle>
      </Frame1>
      <NavBar>
        <LeetcodeStudyGroup>{`LeetcoPal`}</LeetcodeStudyGroup>
        <Link to="/home"><Home>{`Home`}</Home></Link>
        <Link to="/group"><Group>{`Group`}</Group></Link>
        <User>{`User`}</User>
        <Link to="/home"><LogOut>{`Log Out`}</LogOut></Link>
      </NavBar>
    </GroupQuestionPage1>
  );
}

export default GroupQuestionPage;
