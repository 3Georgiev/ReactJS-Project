export default function Header() {
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="top_nav_container">
            <form className="search_form">
              <input
                type="text"
                className="form-control"
                placeholder="What are you looking for?"
              />
              <button>
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
            <div className="user_option_box">
              <a href="" className="account-link">
                <i className="fa fa-sign-in" aria-hidden="true" />
                <span> Login </span>
              </a>
              <a href="" className="cart-link">
                <i className="fa fa-user-plus" aria-hidden="true" />
                <span> Register </span>
              </a>
              <a href="" className="cart-link">
                <i className="fa fa-sign-out" aria-hidden="true" />
                <span> Logout </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span> GameShop </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    Add Offer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
