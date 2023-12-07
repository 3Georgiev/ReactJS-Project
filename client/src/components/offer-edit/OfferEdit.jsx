import "./offerEdit.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as offerService from "../../services/offerService";
import Path from "../../paths";

const EditFromKeys = {
  Title: "title",
  Price: "price",
  Region: "region",
  Platform: "platform",
  ImageUrl: "imageUrl",
  Description: "description",
};

export default function OfferEdit() {
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

  return (
    <>
      <form className="container" onSubmit={editSubmitHandler}>
        <h2>Making changes</h2>
        <label htmlFor="username">Game Title</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          id="title"
          name={EditFromKeys.Title}
          value={offer[EditFromKeys.Title]}
        />
        <label htmlFor="email">Price</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="number"
          name={EditFromKeys.Price}
          value={offer[EditFromKeys.Price]}
        />
        <label htmlFor="password">Regional Limitation</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          name={EditFromKeys.Region}
          value={offer[EditFromKeys.Region]}
        />

        <label htmlFor="confirm-password">Platform</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          name={EditFromKeys.Platform}
          value={offer[EditFromKeys.Platform]}
        />
        <label htmlFor="confirm-password">Image Url</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          name={EditFromKeys.ImageUrl}
          value={offer[EditFromKeys.ImageUrl]}
        />
        <label htmlFor="confirm-password">Description</label>
        <textarea
          className="offer-edit-form-description"
          onChange={onChange}
          type="text"
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
      </form>
    </>
  );
}
