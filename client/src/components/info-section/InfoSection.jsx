import { Link } from "react-router-dom";
import "./infoSection.css";
import Path from "../../paths";

export default function InfoSection() {
  return (
    <section className="info_section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_contact">
              <h5>
                <Link to={Path.Home} className="navbar-brand">
                  <span> GameHaven </span>
                </Link>
              </h5>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true" />
                Varna, Buglaria
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true" />
                +359 888888888
              </p>
              <p>
                <i className="fa fa-envelope" aria-hidden="true" />
                demo@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_info">
              <h5>Information</h5>
              <p>
                Welcome to the Game Shop App! Explore a world of gaming where
                you can engage with a community of fellow gamers. Ready to play?
                Start your adventure now!
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_links">
              <h5>Useful Link</h5>
              <ul>
                <li>
                  <Link to={Path.Home}> Home </Link>
                </li>
                <li>
                  <Link to={Path.Offers}> Offers </Link>
                </li>
                <li>
                  <Link to={Path.About}> About </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_form">
              <div className="social_box">
                <Link to={"https://github.com/3Georgiev/ReactJS-Project"}>
                  <i className="fa fa-github" aria-hidden="true" />
                </Link>
                <Link to={"https://www.linkedin.com/"}>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
