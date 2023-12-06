import { Link } from "react-router-dom";
import Path from "../../../paths";

export default function HomeLatestItemNoResult() {
  return (
    <>
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h1>There are no current offers :(</h1>
                <p>
                  If you wish to be the first to add an offer please visit the
                  create page!
                </p>
                <Link to={Path.OfferCreate}> Create </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/noresult.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
