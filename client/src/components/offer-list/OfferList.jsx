import "./offerList.css";
import { useEffect, useState } from "react";
import * as offerService from "../../services/offerService";
import OfferListItem from "./offer-list-item/OfferListItem";
import { Link } from "react-router-dom";
import Path from "../../paths";
import OfferListNoResult from "./offer-list-noresult/offerListNoResult";

export default function OfferList() {
  const [offers, setOffers] = useState([]);
  const [viewMore, setViewMore] = useState(true);

  useEffect(() => {
    offerService
      .getAll()
      .then((result) => setOffers(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewMoreHandler = () => {
    offerService
      .getAll(viewMore)
      .then((result) => setOffers(result))
      .catch((err) => {
        console.log(err);
      });
    setViewMore(false);
  };

  return (
    <section className="product_section layout_padding">
      {offers.length > 0 ? (
        <div className="container">
          <div className="heading_container heading_center">
            <h2>All avaliable offers</h2>
          </div>
          <div className="row">
            {offers.map((offer) => (
              <OfferListItem key={offer._id} {...offer} />
            ))}
          </div>
          <div className="btn_box">
            {viewMore && (
              <button className="view_more-link" onClick={viewMoreHandler}>
                View All
              </button>
            )}
          </div>
        </div>
      ) : (
        <OfferListNoResult />
      )}
    </section>
  );
}
