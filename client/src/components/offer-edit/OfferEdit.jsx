import "./offerEdit.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as offerService from "../../services/offerService";
import Path from "../../paths";
import Modal from "../modal/Modal";
import formValidator from "../../utils/formValidator";
import ErrorMessage from "../error-message/ErrorMessage";

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
  const [validationErrors, setValidationErrors] = useState({});
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
    const errors = validateValues();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShowEditModal(false);
      return;
    }
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

  const { validateValues } = formValidator(offer, {
    [EditFromKeys.Title]: { required: true, minLength: 3 },
    [EditFromKeys.Price]: { required: true, minValue: 0.3 },
    [EditFromKeys.Region]: { required: true, minLength: 2 },
    [EditFromKeys.Platform]: { required: true, minLength: 2 },
    [EditFromKeys.ImageUrl]: { required: true },
    [EditFromKeys.Description]: { required: true, minLength: 20 },
  });

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
        <ErrorMessage
          typeError={EditFromKeys.Title}
          authValidationErrors={validationErrors}
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
        <ErrorMessage
          typeError={EditFromKeys.Price}
          authValidationErrors={validationErrors}
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
        <ErrorMessage
          typeError={EditFromKeys.Region}
          authValidationErrors={validationErrors}
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
        <ErrorMessage
          typeError={EditFromKeys.Platform}
          authValidationErrors={validationErrors}
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
        <ErrorMessage
          typeError={EditFromKeys.ImageUrl}
          authValidationErrors={validationErrors}
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
        <ErrorMessage
          typeError={EditFromKeys.Description}
          authValidationErrors={validationErrors}
        />
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
