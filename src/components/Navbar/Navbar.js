import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="site-name">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>LeecoPal</h1>
        </Link>
      </div>
      <div className="links">
        <Link style={{ textDecoration: "underline" }} className="link" to="/group">
          Groups
        </Link>
        <Link style={{ textDecoration: "underline" }} className="link" to="/signup">
          Sing Up / Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
