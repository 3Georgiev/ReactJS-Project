import "./offerCreate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import * as offerService from "../../services/offerService";
import Path from "../../paths";
import Modal from "../modal/Modal";
import formValidator from "../../utils/formValidator";

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
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const createSubmitHandler = async (values) => {
    const errors = validateValues();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShowCreateModal(false);
      return;
    }
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

  const { validateValues } = formValidator(values, {
    [CreateFormKeys.Title]: { required: true, minLength: 3 },
    [CreateFormKeys.Price]: { required: true, minValue: 0.3 },
    [CreateFormKeys.Region]: { required: true, minLength: 2 },
    [CreateFormKeys.Platform]: { required: true, minLength: 2 },
    [CreateFormKeys.ImageUrl]: { required: true },
    [CreateFormKeys.Description]: { required: true, minLength: 20 },
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
        {validationErrors[CreateFormKeys.Title] && (
          <p style={{ margin: "0px", color: "red" }}>
            {validationErrors[CreateFormKeys.Title]}
          </p>
        )}

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
        {validationErrors[CreateFormKeys.Price] && (
          <p style={{ margin: "0px", color: "red" }}>
            {validationErrors[CreateFormKeys.Price]}
          </p>
        )}
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
        {validationErrors[CreateFormKeys.Region] && (
          <p style={{ margin: "0px", color: "red" }}>
            {validationErrors[CreateFormKeys.Region]}
          </p>
        )}
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
        {validationErrors[CreateFormKeys.Platform] && (
          <p style={{ margin: "0px", color: "red" }}>
            {validationErrors[CreateFormKeys.Platform]}
          </p>
        )}
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
        {validationErrors[CreateFormKeys.ImageUrl] && (
          <p style={{ margin: "0px", color: "red" }}>
            {validationErrors[CreateFormKeys.ImageUrl]}
          </p>
        )}
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
        {validationErrors[CreateFormKeys.Description] && (
          <p style={{ margin: "0px", color: "red" }}>
            {validationErrors[CreateFormKeys.Description]}
          </p>
        )}
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
