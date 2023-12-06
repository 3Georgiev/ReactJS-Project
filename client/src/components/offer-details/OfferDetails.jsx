import { useParams } from "react-router-dom";
import "./offerDetails.css";
import * as offerService from "../../services/offerService";
import { useEffect, useState } from "react";

export default function OfferDetails() {
  const [offer, setOffer] = useState({});

  const { offerId } = useParams();

  useEffect(() => {
    offerService
      .getOne(offerId)
      .then((result) => setOffer(result))
      .catch((err) => {
        console.log(err);
      });
  }, [offerId]);

  return (
    <div className="details_container">
      <h2 className="title_color" id="gameTitle">
        {offer.title}
      </h2>
      <div className="product_image">
        <img src={offer.imageUrl} alt="Game Cover" />
      </div>
      <div className="product_details">
        <p className="price">${offer.price}</p>
        <p className="description">{offer.description}</p>

        <p>
          <strong>Regional Limitation:</strong> {offer.region}
        </p>
        <p>
          <strong>Platform:</strong> {offer.platform}
        </p>
        <div className="button_container">
          <button className="buy_btn">Buy</button>
          <div className="edit_delete_btns">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
