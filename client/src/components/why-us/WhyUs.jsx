export default function WhyUs() {
  return (
    <section className="why_us_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Why Choose Us</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>Instant product delivery</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Vast Selection</h5>
                <p>Best prices of various digital items</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Best Quality</h5>
                <p>We assure you the best of our services at all times</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
