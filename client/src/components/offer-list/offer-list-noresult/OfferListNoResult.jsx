import { Link } from "react-router-dom";
import Path from "../../../paths";

export default function OfferListNoResult() {
  return (
    <div className="container">
      <div className="heading_container heading_center">
        <h2>There are no current offers :(</h2>
        <img
          style={{ paddingTop: "27px", paddingBottom: "27px" }}
          src="/images/noresult.png"
        />
        <p>
          {" "}
          If you wish to be the first to add an offer please visit the create
          page!
        </p>
      </div>
      <div className="btn_box">
        <Link to={Path.OfferCreate} className="view_more-link">
          Create
        </Link>
      </div>
    </div>
  );
}
