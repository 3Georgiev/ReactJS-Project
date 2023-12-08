import "./freeGames.css";
import { useEffect, useState } from "react";
import * as freeGameService from "../../services/freeGameService";
import OfferListNoResult from "../offer-list/offer-list-noresult/offerListNoResult";

export default function FreeGames() {
  const [freeGames, setFreeGames] = useState([]);

  useEffect(() => {
    freeGameService
      .getFreeGames()
      .then((result) => setFreeGames(result))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="product_section layout_padding">
      {freeGames.length > 0 ? (
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Free Games Available Now</h2>
            <p>Source api: FreeToGame.com</p>
          </div>
          <div className="row">
            {freeGames.map((game) => (
              <div className="box" key={game.id}>
                <div className="detail-box">
                  <h3 className="product_style">{game.title}</h3>
                  <div className="img-box">
                    <img
                      className="game-image"
                      src={game.thumbnail}
                      alt={game.title}
                    />
                    <a
                      className="play-now-link"
                      href={game.game_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Play Now
                    </a>
                  </div>
                  <div className="product_info">
                    <p className="text_style">{game.short_description}</p>
                    <p>Genre: {game.genre}</p>
                    <p>Platform: {game.platform}</p>
                    <p>Publisher: {game.publisher}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <OfferListNoResult />
      )}
    </section>
  );
}
