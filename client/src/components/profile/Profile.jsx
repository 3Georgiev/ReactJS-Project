import "./profile.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import * as offerService from "../../services/offerService";
import Path from "../../paths";

export default function UserProfile() {
  const { username, email, userId } = useContext(AuthContext);

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService
      .getUserCreated(userId)
      .then((result) => setOffers(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="profile_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 ml-auto">
            <div className="detail-box pr-md-3">
              <div className="heading_container">
                <h2>User Info</h2>
              </div>
              <p>
                Username: {username}
                <br />
                Email: {email}
              </p>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="offers-box">
              {offers.length === 0 ? (
                <>
                  <h3>You haven't created any offers yet :(</h3>
                  <img
                    style={{ paddingTop: "27px", paddingBottom: "27px" }}
                    src="/images/noresult.png"
                  />
                </>
              ) : (
                <h3>Offers you have created</h3>
              )}

              {offers.map((offer) => (
                <div className="box" key={offer._id}>
                  <div className="img-box">
                    <img src={offer.imageUrl} alt="" />
                    <Link
                      to={`${Path.Offers}/${offer._id}/details`}
                      className="details-btn"
                    >
                      <span>Details</span>
                    </Link>
                  </div>
                  <div className="detail-box">
                    <h5 className="product_style">{offer.title}</h5>
                    <div className="product_info">
                      <h5>
                        <span className="text_style">$</span> {offer.price}
                      </h5>
                      <h5>
                        <span className="text_style">Platform:</span>{" "}
                        {offer.platform}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
