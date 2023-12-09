import "./offerDetails.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import * as offerService from "../../services/offerService";
import * as commentService from "../../services/commentService";
import Path from "../../paths";
import useForm from "../../hooks/useForm";
import CommentItem from "./comment-item/CommentItem";
import Modal from "../modal/Modal";

export default function OfferDetails() {
  const [offer, setOffer] = useState({});
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const { isAuthenticated, userId, username } = useContext(AuthContext);
  const navigate = useNavigate();
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

  const offerDeleteBtnHandler = () => {
    offerService.remove(offerId);
    navigate(Path.Offers);
  };

  const showDelete = () => {
    showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
  };

  const commentSubmitHandler = (values) => {
    if (values.content.trim().length < 5) {
      setCommentError(true);
      return;
    }
    setCommentError(false);
    commentService
      .create(offerId, { ...values, ownerUsername: username })
      .then((result) => {
        setComments((state) => [...state, result]);
      });
    values.content = "";
  };

  const { values, onChange, onSubmit } = useForm(commentSubmitHandler, {
    content: "",
  });

  const deleteCommentHandler = async (commentId) => {
    await commentService.remove(commentId);
    setComments((state) =>
      state.filter((comment) => comment._id !== commentId)
    );
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
            {/* {!isOwner && <button className="buy_btn">Buy</button>} */}

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
        <Modal
          showModal={showDelete}
          submitHandler={offerDeleteBtnHandler}
          title={offer.title}
          text={"Are you sure you want to delete this offer?"}
        />
      )}

      {/* Comment Section */}

      <div className="comment_section_container">
        <h3>Comments</h3>

        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem
              key={comment._id}
              {...comment}
              userId={userId}
              username={comment.ownerUsername}
              deleteCommentHandler={deleteCommentHandler}
            />
          ))
        ) : (
          <p style={{ color: "#ce5600" }}>No comments here :(</p>
        )}

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
            {commentError && (
              <p style={{ marginTop: "10px", color: "red" }}>
                Comment must be longer than 5 characters!
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
