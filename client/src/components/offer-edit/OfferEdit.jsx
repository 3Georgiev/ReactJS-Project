import "./offerEdit.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as offerService from "../../services/offerService";
import Path from "../../paths";
import Modal from "../modal/Modal";

const EditFromKeys = {
  Title: "title",
  Price: "price",
  Region: "region",
  Platform: "platform",
  ImageUrl: "imageUrl",
  Description: "description",
};

export default function OfferEdit() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [offer, setOffer] = useState({
    [EditFromKeys.Title]: "",
    [EditFromKeys.Price]: 0,
    [EditFromKeys.Region]: "",
    [EditFromKeys.Platform]: "",
    [EditFromKeys.ImageUrl]: "",
    [EditFromKeys.Description]: "",
  });

  const { offerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    offerService
      .getOne(offerId)
      .then((result) => setOffer(result))
      .catch((err) => console.log(err));
  }, [offerId]);

  const editSubmitHandler = (e) => {
    e.preventDefault();
    offerService.edit(offerId, {
      ...offer,
    });
    navigate(`${Path.Offers}/${offerId}/details`);
  };

  const onChange = (e) => {
    setOffer((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const showEdit = (e) => {
    e ? e.preventDefault() : null;
    showEditModal ? setShowEditModal(false) : setShowEditModal(true);
  };

  return (
    <>
      <form className="container" onSubmit={showEdit}>
        <h2>Making changes</h2>
        <label htmlFor="title">Game Title</label>
        <input
          className="offer-edit-form-input"
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="title"
          name={EditFromKeys.Title}
          value={offer[EditFromKeys.Title]}
        />
        <label htmlFor="price">Price</label>
        <input
          className="offer-edit-form-input"
          autoComplete="on"
          onChange={onChange}
          type="number"
          id="price"
          name={EditFromKeys.Price}
          value={offer[EditFromKeys.Price]}
        />
        <label htmlFor="region">Regional Limitation</label>
        <input
          className="offer-edit-form-input"
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="region"
          name={EditFromKeys.Region}
          value={offer[EditFromKeys.Region]}
        />

        <label htmlFor="platform">Platform</label>
        <input
          className="offer-edit-form-input"
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="platform"
          name={EditFromKeys.Platform}
          value={offer[EditFromKeys.Platform]}
        />
        <label htmlFor="imageUrl">Image Url</label>
        <input
          className="offer-edit-form-input"
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="imageUrl"
          name={EditFromKeys.ImageUrl}
          value={offer[EditFromKeys.ImageUrl]}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="offer-edit-form-description"
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="description"
          name={EditFromKeys.Description}
          value={offer[EditFromKeys.Description]}
        ></textarea>
        <div>
          <Link to={`${Path.Offers}/${offerId}/details`}>
            <button className="offer-edit-form-btn">Back</button>
          </Link>
          <button className="offer-edit-form-btn" type="submit">
            Edit
          </button>
        </div>
        {showEditModal && (
          <Modal
            showModal={showEdit}
            submitHandler={editSubmitHandler}
            title={offer.title}
            text={"Are you sure you want to edit this offer?"}
          />
        )}
      </form>
    </>
  );
}
