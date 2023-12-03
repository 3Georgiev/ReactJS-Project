import { Routes, Route } from "react-router-dom";
import Path from "./paths";

import InfoSection from "./components/info-section/InfoSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Offers from "./components/offers/Offers";
import About from "./components/about/About";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <div className="hero_area">
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Offers} element={<Offers />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
