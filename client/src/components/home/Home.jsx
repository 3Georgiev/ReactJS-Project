import "./home.css";
import { useEffect, useState } from "react";
import * as offerService from "../../services/offerService";
import WhyUs from "../why-us/WhyUs";
import HomeLatestItem from "./home-latest-item/HomeLatestItem";
import HomeLatestItemNoResult from "./home-latest-item/HomeLatestItemNoResult";

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
            {offers.length > 0 ? (
              offers.map((offer) => (
                <HomeLatestItem
                  key={offer._id}
                  {...offer}
                  index={offers.indexOf(offer)}
                />
              ))
            ) : (
              <HomeLatestItemNoResult />
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
