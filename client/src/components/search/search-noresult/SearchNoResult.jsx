export default function SearchListNoResult({ searchQuery }) {
  return (
    <div className="container">
      <div className="heading_container heading_center">
        <h2>There are no results for "{searchQuery}" :(</h2>
        <img
          style={{ paddingTop: "27px", paddingBottom: "27px" }}
          src="/images/noresult.png"
        />
      </div>
    </div>
  );
}
