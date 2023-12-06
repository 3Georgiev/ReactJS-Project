import { useEffect, useState } from "react";
import WhyUs from "../why-us/WhyUs";
import "./home.css";
import * as offerService from "../../services/offerService";
import HomeLatestItem from "./home-latest-item/HomeLatestItem";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService
      .getLatest()
      .then((result) => setOffers(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <h1 className="latest-offers">Latest Offers</h1>
          <div className="carousel-inner">
            {offers.length === 0 ? (
              offers.map((offer) => (
                <HomeLatestItem
                  key={offer._id}
                  {...offer}
                  index={offers.indexOf(offer)}
                />
              ))
            ) : (
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>There are no current offers :(</h1>
                        <p>
                          If you wish to be the first to add an offer please
                          visit the create page!
                        </p>
                        <Link to={Path.OfferCreate}> Create </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/noresult.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="carousel_btn_box">
              <a
                className="carousel-control-prev"
                href="#customCarousel1"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
}
