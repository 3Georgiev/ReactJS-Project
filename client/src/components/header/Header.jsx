import { Link, useLocation } from "react-router-dom";
import Path from "../../paths";
import "./header.css";

export default function Header() {
  const location = useLocation();

  const isActive = (targetPath) => {
    return targetPath === location.pathname ? "active" : "";
  };

  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="top_nav_container">
            <form className="search_form">
              <input
                type="text"
                className="form-control"
                placeholder="What are you looking for?"
              />
              <button>
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
            <div className="user_option_box">
              <Link to={Path.Login} className="account-link">
                <i className="fa fa-sign-in" aria-hidden="true" />
                <span> Login </span>
              </Link>
              <Link to={Path.Register} className="account-link">
                <i className="fa fa-user-plus" aria-hidden="true" />
                <span> Register </span>
              </Link>
              <Link to={Path.Logout} className="account-link">
                <i className="fa fa-sign-out" aria-hidden="true" />
                <span> Logout </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link to={Path.Home} className="navbar-brand">
              <span> GameShop </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className={`nav-item ${isActive(Path.Home)}`}>
                  <Link to={Path.Home} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${isActive(Path.Offers)}`}>
                  <Link to={Path.Offers} className="nav-link">
                    Offers
                  </Link>
                </li>
                <li className={`nav-item ${isActive("NA")}`}>
                  <Link to="" className="nav-link">
                    Add Offer
                  </Link>
                </li>
                <li className={`nav-item ${isActive(Path.About)}`}>
                  <Link to={Path.About} className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
