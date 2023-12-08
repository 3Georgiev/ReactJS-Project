import "./about.css";

export default function About() {
  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 ml-auto">
            <div className="detail-box pr-md-3">
              <div className="heading_container">
                <h2>Welcome to the Game Shop App!</h2>
              </div>
              <p>
                Explore a world of gaming where you can register, login, and
                engage with a community of fellow gamers. Create, edit, and
                share offers, and join the conversation by leaving comments.
                Dive into the ultimate gaming experience with our user-friendly
                platform. Ready to play? Start your adventure now!
              </p>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
