import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h2>🎬 StreamSphere</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/upload">Upload</Link>{" "}
        <Link to="/watch">Watch</Link>
      </div>
    </nav>
  );
}

export default Navbar;