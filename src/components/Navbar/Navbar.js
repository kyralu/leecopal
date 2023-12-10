import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const beforeLogggedin = () => {
  return (
    <div className="links">
      <Link
        style={{ textDecoration: "underline" }}
        className="link"
        to="/signup"
      >
        Sing Up
      </Link>
      <Link
        style={{ textDecoration: "underline" }}
        className="link"
        to="/signin"
      >
        Sign In
      </Link>
    </div>
  );
};

const afterLogggedin = (props) => {
  return (
    <div className={style.links}>
      <div className={style.welcome}>🤖 <span className={style.userName}>{props.leetcodeId}</span></div>
      <button className={style.signoutButton}>SIGN OUT</button>
    </div>
  );
}


const Navbar = (props) => {
  return (
    <nav className={style.navbar}>
      <div className={style.siteName}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>LeecoPal</h1>
        </Link>
      </div>
      {props.leetcodeId ? afterLogggedin(props) : beforeLogggedin()}
    </nav>
  );
};

export default Navbar;
