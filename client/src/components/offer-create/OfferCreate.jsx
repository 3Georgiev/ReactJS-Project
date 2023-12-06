import "./offerCreate.css";

export default function OfferCreate() {
  return (
    <>
      <form className="container">
        <h2>Create an offer!</h2>
        <label htmlFor="username">Game Title</label>
        <input
          className="offer-create-form-input"
          type="text"
          id="title"
          name="title"
        />
        <label htmlFor="email">Price</label>
        <input
          className="offer-create-form-input"
          type="number"
          id="price"
          name="price"
        />
        <label htmlFor="password">Regional Limitation</label>
        <input
          className="offer-create-form-input"
          autoComplete="on"
          type="text"
          id="region"
          name="region"
        />

        <label htmlFor="confirm-password">Platform</label>
        <input
          className="offer-create-form-input"
          autoComplete="on"
          type="text"
          id="platform"
          name="platform"
        />
        <label htmlFor="confirm-password">Image Url</label>
        <input
          className="offer-create-form-input"
          autoComplete="on"
          type="text"
          id="imageUrl"
          name="imageUrl"
        />
        <label htmlFor="confirm-password">Description</label>
        <input
          className="offer-create-form-description"
          autoComplete="on"
          type="text"
          id="description"
          name="description"
        />
        <div>
          <button className="offer-create-form-btn" type="submit">
            Create
          </button>
        </div>
        {/* <div className="offer-create-extra-links">
          <a href="#">Already have an account?</a>
          <span>|</span>
          <a href="#">Login</a>
        </div> */}
      </form>
    </>
  );
}
