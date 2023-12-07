import "./offerCreate.css";
import useForm from "../../hooks/useForm";
import * as offerService from "../../services/offerService";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";

const CreateFromKeys = {
  Title: "title",
  Price: "price",
  Region: "region",
  Platform: "platform",
  ImageUrl: "imageUrl",
  Description: "description",
};

export default function OfferCreate() {
  const navigate = useNavigate();

  const createSubmitHandler = async (values) => {
    await offerService.create(values);
    navigate(Path.Offers);
  };

  const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
    [CreateFromKeys.Title]: "",
    [CreateFromKeys.Price]: "",
    [CreateFromKeys.Region]: "",
    [CreateFromKeys.Platform]: "",
    [CreateFromKeys.ImageUrl]: "",
    [CreateFromKeys.Description]: "",
  });

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <h2>Create an offer!</h2>
        <label htmlFor="username">Game Title</label>
        <input
          className="offer-create-form-input"
          onChange={onChange}
          type="text"
          id="title"
          name={CreateFromKeys.Title}
          value={values[CreateFromKeys.Title]}
        />
        <label htmlFor="email">Price</label>
        <input
          className="offer-create-form-input"
          onChange={onChange}
          type="number"
          name={CreateFromKeys.Price}
          value={values[CreateFromKeys.Price]}
        />
        <label htmlFor="password">Regional Limitation</label>
        <input
          className="offer-create-form-input"
          onChange={onChange}
          type="text"
          name={CreateFromKeys.Region}
          value={values[CreateFromKeys.Region]}
        />

        <label htmlFor="confirm-password">Platform</label>
        <input
          className="offer-create-form-input"
          onChange={onChange}
          type="text"
          name={CreateFromKeys.Platform}
          value={values[CreateFromKeys.Platform]}
        />
        <label htmlFor="confirm-password">Image Url</label>
        <input
          className="offer-create-form-input"
          onChange={onChange}
          type="text"
          name={CreateFromKeys.ImageUrl}
          value={values[CreateFromKeys.ImageUrl]}
        />
        <label htmlFor="confirm-password">Description</label>
        <textarea
          className="offer-create-form-description"
          onChange={onChange}
          type="text"
          name={CreateFromKeys.Description}
          value={values[CreateFromKeys.Description]}
        ></textarea>
        <div>
          <button className="offer-create-form-btn" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
