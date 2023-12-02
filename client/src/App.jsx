import InfoSection from "./components/info-section/InfoSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="hero_area">
      <Header />
      <Home />

      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
