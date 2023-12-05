import React from 'react';

import WebsitePicImage from '../assets/images/Website_Pic.png';

import { styled } from '@mui/material/styles';

const HomePage1 = styled("div")({
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

const Footer = styled("div")({
  backgroundColor: `rgba(74, 74, 74, 1)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `69px`,
  left: `0px`,
  top: `955px`,
});

const CopyRightLeetcodeStu = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `179.99999523162842%`,
  textTransform: `capitalize`,
  position: `absolute`,
  left: `587px`,
  top: `20px`,
});

const WebsitePic = styled("img")({
  height: `414px`,
  width: `1065px`,
  position: `absolute`,
  left: `188px`,
  top: `156px`,
});

const BriefIntro = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Istok Web`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `1065px`,
  height: `306px`,
  position: `absolute`,
  left: `188px`,
  top: `609px`,
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


function HomePage() {
  console.log("Hello!");

  return (
    <HomePage1>
      <Footer>
        <CopyRightLeetcodeStu>
          {`copyRight @ Leetcode Study Group`}
        </CopyRightLeetcodeStu>
      </Footer>
      <WebsitePic src={WebsitePicImage} loading='lazy' alt={"Website Pic"}/>
      <BriefIntro>
        {`Lorem ipsum dolor sit amet. Sit neque exercitationem et quod voluptatem ut eveniet numquam et sequi maiores non neque eligendi. Qui suscipit exercitationem non dolorum suscipit eos atque vitae in veritatis cupiditate aut voluptatem fugit. Sed sequi quod aut libero molestias id laboriosam unde.
Eos atque deserunt ut vero illum aut odio dolores eos sint doloribus aut provident dicta hic earum quia. Et dolorem minus sed voluptas nostrum et incidunt reprehenderit in rerum amet.
Ab laudantium architecto qui praesentium ratione eos voluptatem sunt qui perferendis dicta sed dolor nobis. Est soluta totam id atque voluptatum a maxime quos ut deleniti quibusdam aut soluta magni eos amet quos ut accusantium voluptatem?`}
      </BriefIntro>
      <NavBar>
        <LeetcodeStudyGroup>
          {`LeecoPal`}
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
        <SignUp>
          {`Sign Up`}
        </SignUp>
      </NavBar>
    </HomePage1>);

  }

export default HomePage;
