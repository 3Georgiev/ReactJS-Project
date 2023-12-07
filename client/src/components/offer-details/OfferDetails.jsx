import { Link, useParams } from "react-router-dom";
import "./offerDetails.css";
import * as offerService from "../../services/offerService";
import { useEffect, useState } from "react";
import OfferDeleteModal from "./offer-delete-modal/offerDeleteModal";
import Path from "../../paths";

export default function OfferDetails() {
  const [offer, setOffer] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { offerId } = useParams();

  useEffect(() => {
    offerService
      .getOne(offerId)
      .then((result) => setOffer(result))
      .catch((err) => {
        console.log(err);
      });
  }, [offerId]);

  const showDelete = () => {
    showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
  };

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
            <Link to={`${Path.Offers}/edit/${offerId}`}>
              <button>Edit</button>
            </Link>
            <button onClick={showDelete}>Delete</button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <OfferDeleteModal
          showDelete={showDelete}
          offerId={offerId}
          title={offer.title}
        />
      )}
    </div>
  );
}
