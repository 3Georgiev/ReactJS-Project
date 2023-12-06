import { Link } from "react-router-dom";
import Path from "../../../paths";

export default function HomeLatestItem({
  _id,
  title,
  description,
  price,
  imageUrl,
  index,
}) {
  const activeCarousel = index === 0;

  return (
    <div className={`carousel-item ${activeCarousel ? "active" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h1>{title}</h1>
              <p>{description}</p>
              <Link to={`${Path.Offers}/details/${_id}`}> Details </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
