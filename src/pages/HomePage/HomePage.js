import React from "react";
import "./HomePage.css";
import WebSitePicImage from "../../assets/images/Website_Pic.png";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="container">
        <p>Let's practice together!</p>
        <div className="button-container">
          <button className="button" onClick={() => {navigate('/signup')}}>Sign Up</button>
          <button className="button" onClick={() => {navigate('/login')}}>Login</button>
        </div>
      </div>

      <img class="background-image" src={WebSitePicImage} alt="Website Pic" />
    </div>
  );
}

export default HomePage;
