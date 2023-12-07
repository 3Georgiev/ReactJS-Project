import "./offerDetails.css";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import * as offerService from "../../services/offerService";
import Path from "../../paths";
import OfferDeleteModal from "./offer-delete-modal/offerDeleteModal";

export default function OfferDetails() {
  const [offer, setOffer] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { isAuthenticated, userId } = useContext(AuthContext);
  const { offerId } = useParams();
  const isOwner = userId === offer._ownerId;

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
        {isAuthenticated && (
          <div className="button_container">
            {!isOwner && <button className="buy_btn">Buy</button>}

            {isOwner && (
              <div className="edit_delete_btns">
                <Link to={`${Path.Offers}/${offerId}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={showDelete}>Delete</button>
              </div>
            )}
          </div>
        )}
        {!isAuthenticated && (
          <div className="details-extra-links">
            <Link to={Path.Login}>
              To make a purchase you must have an account!
            </Link>
            <span>|</span>
            <Link to={Path.Login}>Login</Link>
          </div>
        )}
      </div>
      {showDeleteModal && (
        <OfferDeleteModal
          showDelete={showDelete}
          offerId={offerId}
          title={offer.title}
        />
      )}

      {/* Comment Section */}

      <div className="comment_section_container">
        <h3>Comments</h3>
        <div className="comment">
          <strong>Test</strong> Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test
          <button>Delete</button>
        </div>
        <div className="comment">
          <strong>Test</strong> Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test
          <button>Delete</button>
        </div>

        {isAuthenticated && (
          <div className="add_comment">
            <textarea placeholder="Add your comment..." value="test" />
            <button>Add Comment</button>
          </div>
        )}
      </div>
    </div>
  );
}
