import { Link } from "react-router-dom";
import Path from "../../../paths";

export default function SearchItem({ _id, title, price, platform, imageUrl }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <div className="box">
          <div className="img-box">
            <img src={imageUrl} alt="" />
            <Link to={`${Path.Offers}/${_id}/details`} className="details-btn">
              <span> Details </span>
            </Link>
          </div>
          <div className="detail-box">
            <h5 className="product_style">{title}</h5>
            <div className="product_info">
              <h5>
                <span className="text_style">$</span> {price}
              </h5>
              <h5>
                <span className="text_style">Platform:</span> {platform}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
