import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const InfoPage = () => {
  return (
    <div className="info">
      <Logo />
      <Navigation />
      <section>
        <div>
          <img src="" alt="img-1"></img>
          <img src="" alt="img-2"></img>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InfoPage;
