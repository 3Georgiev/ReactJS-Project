import { useEffect, useState } from "react";
import * as offerService from "../../services/offerService";
import "./offerList.css";
import OfferListItem from "./offer-list-item/OfferListItem";

export default function OfferList() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService
      .getAll()
      .then((result) => setOffers(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Products</h2>
        </div>
        <div className="row">
          {offers.map((offer) => (
            <OfferListItem key={offer._id} {...offer} />
          ))}
        </div>
        <div className="btn_box">
          <a href="" className="view_more-link">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
