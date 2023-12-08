import "./notFound.css";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function NotFound() {
  return (
    <>
      <div className="container">
        <div className="error-text">404</div>
        <div className="info-text">
          Oops! The page you are looking for might be in another universe.
        </div>
        <Link to={Path.Home}>
          <button className="form-btn">Go Back Home</button>
        </Link>
      </div>
    </>
  );
}
