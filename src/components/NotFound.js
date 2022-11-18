import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
