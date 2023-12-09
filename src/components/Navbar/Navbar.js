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
        <Link className="link" to="/group">
          Groups
        </Link>
        <Link className="link" to="/signup">
          Join
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
