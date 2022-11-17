import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <span>#</span> React Social Media
      </h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/createPost">Create Post</Link>
      </div>
    </div>
  );
}

export default Navbar;
