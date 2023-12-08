import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchItem from "./search-item/SearchItem";
import SearchListNoResult from "./search-noresult/SearchNoResult";
import { search } from "../../services/offerService";
import Path from "../../paths";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    search(searchQuery)
      .then((result) => setSearchResult(result))
      .catch((err) => console.log(err));
  }, [searchQuery]);

  return (
    <section className="product_section layout_padding">
      {searchResult.length > 0 ? (
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Matches for: "{searchQuery}"</h2>
          </div>
          <div className="row">
            {searchResult.map((searchResult) => (
              <SearchItem key={searchResult._id} {...searchResult} />
            ))}
          </div>
        </div>
      ) : (
        <SearchListNoResult searchQuery={searchQuery} />
      )}
    </section>
  );
}
