import "./offerEdit.css";
import useForm from "../../hooks/useForm";
import * as offerService from "../../services/offerService";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const editSubmitHandler = async () => {
    await offerService.put(values);
    navigate(Path.Offers);
  };

  const { values, onChange, onSubmit } = useForm(editSubmitHandler, {
    [EditFromKeys.Title]: "",
    [EditFromKeys.Price]: "",
    [EditFromKeys.Region]: "",
    [EditFromKeys.Platform]: "",
    [EditFromKeys.ImageUrl]: "",
    [EditFromKeys.Description]: "",
  });

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <h2>Making changes</h2>
        <label htmlFor="username">Game Title</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          id="title"
          name={EditFromKeys.Title}
          value={values[EditFromKeys.Title]}
        />
        <label htmlFor="email">Price</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="number"
          name={EditFromKeys.Price}
          value={values[EditFromKeys.Price]}
        />
        <label htmlFor="password">Regional Limitation</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          name={EditFromKeys.Region}
          value={values[EditFromKeys.Region]}
        />

        <label htmlFor="confirm-password">Platform</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          name={EditFromKeys.Platform}
          value={values[EditFromKeys.Platform]}
        />
        <label htmlFor="confirm-password">Image Url</label>
        <input
          className="offer-edit-form-input"
          onChange={onChange}
          type="text"
          name={EditFromKeys.ImageUrl}
          value={values[EditFromKeys.ImageUrl]}
        />
        <label htmlFor="confirm-password">Description</label>
        <textarea
          className="offer-edit-form-description"
          onChange={onChange}
          type="text"
          name={EditFromKeys.Description}
          value={values[EditFromKeys.Description]}
        ></textarea>
        <div>
          <button className="offer-edit-form-btn" type="submit">
            Back
          </button>
          <button className="offer-edit-form-btn" type="submit">
            Edit
          </button>
        </div>
      </form>
    </>
  );
}
