import React from "react";
import style from "./HomePage.module.css";
import WebSitePicImage from "../../assets/images/Website_Pic.png";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.container}>
        <p>Let's practice together!</p>
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={() => {navigate('/signup')}}>Sign Up</button>
          <button className={style.button} onClick={() => {navigate('/login')}}>Log In</button>
        </div>
      </div>

      <img className={style.backgroundImage} src={WebSitePicImage} alt="Website Pic" />
    </div>
  );
}

export default HomePage;
