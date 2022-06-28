import "./css/style.css";
import introDesktop from "./assets/image-intro-desktop.jpg";
import iconSnappy from "./assets/icon-snappy-process.svg";
import iconAffordable from "./assets/icon-affordable-prices.svg";
import iconPeople from "./assets/icon-people-first.svg";
import Header from "./components/Header";
import Button from "./components/Button";
import Feature from "./components/Feature";
import CtaBlock from "./components/CtaBlock";
import Footer from "./components/Footer";

const App = () => {
  const features = [
    {
      iconSrc: iconSnappy,
      iconAlt: "snappy-process",
      headingText: "Snappy Process",
      paragraphText:
        "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      iconSrc: iconAffordable,
      iconAlt: "affordable-prices",
      headingText: "Affordable Prices",
      paragraphText:
        "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      iconSrc: iconPeople,
      iconAlt: "people-first",
      headingText: "People First",
      paragraphText:
        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ];

  return (
    <div className="page-container">
      <div className="page">
        <Header />
        <section className="intro">
          <div className="intro__container">
            <hr className="intro__hr" />
            <h1 className="intro__heading">Humanizing your insurance.</h1>
            <p className="intro__paragraph">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <Button block="intro" btnText="VIEW PLANS" />
          </div>
          <img src={introDesktop} alt="intro" className="intro__img" />
        </section>
        <section className="features">
          <hr className="features__hr" />
          <h1 className="features__section-heading">We're different</h1>
          <div className="features__container">
            {features.map((feature) => (
              <Feature
                iconSrc={feature.iconSrc}
                iconAlt={feature.iconAlt}
                headingText={feature.headingText}
                paragraphText={feature.paragraphText}
              />
            ))}
          </div>
        </section>
        <section className="cta">
          <CtaBlock
            headingText="Find out more about how we work"
            btnText="HOW WE WORK"
          />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
