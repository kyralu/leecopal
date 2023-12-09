import React from "react";
import "./HomePage.css";
import WebSitePicImage from "../../assets/images/Website_Pic.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="slogen">Let's practice together!</div>
      <img class="background-image" src={WebSitePicImage} alt="Website Pic" />
    </div>
  );
}

export default HomePage;
