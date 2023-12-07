import "./offerDetails.css";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import * as offerService from "../../services/offerService";
import * as commentService from "../../services/commentService";
import Path from "../../paths";
import OfferDeleteModal from "./offer-delete-modal/offerDeleteModal";
import useForm from "../../hooks/useForm";
import CommentItem from "./comment-item/CommentItem";

export default function OfferDetails() {
  const [offer, setOffer] = useState({});
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { isAuthenticated, userId, username } = useContext(AuthContext);
  const { offerId } = useParams();
  const isOwner = userId === offer._ownerId;

  useEffect(() => {
    offerService
      .getOne(offerId)
      .then((result) => setOffer(result))
      .catch((err) => {
        console.log(err);
      });

    commentService
      .getAll(offerId)
      .then((result) => setComments(result))
      .catch((err) => {
        console.log(err);
      });
  }, [offerId]);

  const showDelete = () => {
    showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
  };

  const commentSubmitHandler = async (values) => {
    commentService
      .create(offerId, { ...values, ownerUsername: username })
      .then((result) => {
        setComments((state) => [...state, result]);
      });
  };

  const { values, onChange, onSubmit } = useForm(commentSubmitHandler, {
    content: "",
  });

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

        {comments.map((comment) => (
          <CommentItem
            key={comment._id}
            {...comment}
            username={comment.ownerUsername}
          />
        ))}

        {isAuthenticated && (
          <form className="add_comment" onSubmit={onSubmit}>
            <textarea
              type="text"
              placeholder="Add your comment..."
              onChange={onChange}
              name="content"
              value={values.content}
            />

            <button>Add Comment</button>
          </form>
        )}
      </div>
    </div>
  );
}
