import "./offerCreate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import * as offerService from "../../services/offerService";
import Path from "../../paths";
import Modal from "../modal/Modal";
import useFormValidator from "../../hooks/useFormValidator";

const CreateFormKeys = {
  Title: "title",
  Price: "price",
  Region: "region",
  Platform: "platform",
  ImageUrl: "imageUrl",
  Description: "description",
};

export default function OfferCreate() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const navigate = useNavigate();

  const createSubmitHandler = async (values) => {
    await offerService.create(values);
    navigate(Path.Offers);
  };

  const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
    [CreateFormKeys.Title]: "",
    [CreateFormKeys.Price]: 0,
    [CreateFormKeys.Region]: "",
    [CreateFormKeys.Platform]: "",
    [CreateFormKeys.ImageUrl]: "",
    [CreateFormKeys.Description]: "",
  });

  const { errors } = useFormValidator(values, {
    [CreateFormKeys.Title]: { required: true, minLength: 3 },
    [CreateFormKeys.Price]: { minValue: 5 },
    [CreateFormKeys.Region]: { required: true },
    [CreateFormKeys.Platform]: { required: true },
    [CreateFormKeys.ImageUrl]: { required: true, validUrl: true },
    [CreateFormKeys.Description]: { required: true },
  });

  const showCreate = (e) => {
    e ? e.preventDefault() : null;
    showCreateModal ? setShowCreateModal(false) : setShowCreateModal(true);
  };

  return (
    <>
      <form className="container" onSubmit={showCreate}>
        <h2>Create an offer!</h2>
        <label htmlFor="title">Game Title</label>
        <input
          className="offer-create-form-input"
          placeholder="Example Title..."
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="title"
          name={CreateFormKeys.Title}
          value={values[CreateFormKeys.Title]}
        />
        <label htmlFor="price">Price</label>
        <input
          className="offer-create-form-input"
          autoComplete="on"
          onChange={onChange}
          type="number"
          id="price"
          name={CreateFormKeys.Price}
          value={values[CreateFormKeys.Price]}
        />
        <label htmlFor="region">Regional Limitation</label>
        <input
          className="offer-create-form-input"
          placeholder="Europe/Global..."
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="region"
          name={CreateFormKeys.Region}
          value={values[CreateFormKeys.Region]}
        />

        <label htmlFor="platform">Platform</label>
        <input
          className="offer-create-form-input"
          placeholder="Steam/Origin/Xbox..."
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="platform"
          name={CreateFormKeys.Platform}
          value={values[CreateFormKeys.Platform]}
        />
        <label htmlFor="imageUrl">Image Url</label>
        <input
          className="offer-create-form-input"
          placeholder="https://example/example.jpg..."
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="imageUrl"
          name={CreateFormKeys.ImageUrl}
          value={values[CreateFormKeys.ImageUrl]}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="offer-create-form-description"
          placeholder="Game summary..."
          autoComplete="on"
          onChange={onChange}
          type="text"
          id="description"
          name={CreateFormKeys.Description}
          value={values[CreateFormKeys.Description]}
        ></textarea>
        <div>
          <button className="offer-create-form-btn" type="submit">
            Create
          </button>
        </div>
        {showCreateModal && (
          <Modal
            showModal={showCreate}
            submitHandler={onSubmit}
            title={values.title}
            text={"Are you sure you want to create this offer?"}
          />
        )}
      </form>
    </>
  );
}
