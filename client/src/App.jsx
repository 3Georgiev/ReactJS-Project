import { Routes, Route } from "react-router-dom";

import Path from "./paths";
import { AuthProvider } from "./context/authContext";

import InfoSection from "./components/info-section/InfoSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import OfferCreate from "./components/offer-create/OfferCreate";
import About from "./components/about/About";
import NotFound from "./components/notfound/NotFound";
import Logout from "./components/logout/logout";
import OfferList from "./components/offer-list/OfferList";
import OfferDetails from "./components/offer-details/OfferDetails";
import OfferEdit from "./components/offer-edit/OfferEdit";

function App() {
  return (
    <AuthProvider>
      <div className="hero_area">
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Offers} element={<OfferList />} />
          <Route path={Path.OfferCreate} element={<OfferCreate />} />
          <Route path={`/offers/:offerId/details`} element={<OfferDetails />} />
          <Route path={`/offers/:offerId/edit`} element={<OfferEdit />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoSection />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
