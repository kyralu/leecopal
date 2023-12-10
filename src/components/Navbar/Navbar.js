import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";



const BeforeLogggedin = () => {
  return (
    <div className={style.links}>
      <Link
        style={{ textDecoration: "underline" }}
        className={style.link}
        to="/signup"
      >
        Sign Up
      </Link>
      <Link
        style={{ textDecoration: "underline" }}
        className={style.link}
        to="/login"
      >
        Log In
      </Link>
    </div>
  );
};

const AfterLogggedin = (props) => {
  const handleClickSignOut = () => {
    props.onSignOut();
    props.navigate("/");
  }
  return (
    <div className={style.links}>
      <div className={style.welcome}>🤖 <span className={style.userName}>{props.leetcodeId}</span></div>
      <button className={style.signoutButton} onClick={handleClickSignOut}>SIGN OUT</button>
    </div>
  );
}


const Navbar = (props) => {

  const navigate = useNavigate();

  const handleClickSiteName = () => {
    if(props.leetcodeId) {
      // navigate to group page
      navigate("/group");
    } else {
      // navigate to home page
      navigate("/");
    }
  }

  return (
    <nav className={style.navbar}>
      <div style={{ cursor: 'pointer' }} className={style.siteName} onClick={handleClickSiteName}>
        <h1>LeecoPal</h1>
      </div>
      {props.leetcodeId ? AfterLogggedin({...props, navigate}) : BeforeLogggedin()}
    </nav>
  );
};

export default Navbar;
