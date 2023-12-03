export default function OfferDetails() {
  return (
    <>
      <div className="details_container">
        <h2 id="gameTitle">Game Title</h2>
        <div className="product_image">
          <img src="images/p1.png" alt="Game Cover" />
        </div>
        <div className="product_details">
          <p className="price">$49.99</p>
          <p className="description">
            Immerse yourself in an epic gaming experience with our thrilling
            game. Explore a rich and captivating virtual world filled with
            adventure and challenges.
          </p>
          {/* Placeholder details (replace with actual data) */}
          <p>
            <strong>Title:</strong> Game Title
          </p>
          <p>
            <strong>Regional Limitation:</strong> Region Free
          </p>
          <p>
            <strong>Platform:</strong> PC, PlayStation, Xbox
          </p>
        </div>
        <div className="buy_btn">Buy</div>
        <div className="edit_delete_btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}
