import { useState, useEffect } from "react";
import "./css/style.css";
import introDesktop from "./assets/image-intro-desktop.jpg";
import iconSnappy from "./assets/icon-snappy-process.svg";
import iconAffordable from "./assets/icon-affordable-prices.svg";
import iconPeople from "./assets/icon-people-first.svg";
import Header from "./components/Header";
import Link from "./components/Link";
import Button from "./components/Button";
import Feature from "./components/Feature";
import CtaBlock from "./components/CtaBlock";
import Footer from "./components/Footer";

const App = () => {
  const [menu, setMenu] = useState(false);

  const TEXT_TYPE = "text";
  const BTN_TYPE = "button";

  const navLinks = [
    {
      type: TEXT_TYPE,
      label: "HOW WE WORK",
    },
    {
      type: TEXT_TYPE,
      label: "BLOG",
    },
    {
      type: TEXT_TYPE,
      label: "ACCOUNT",
    },
    {
      type: BTN_TYPE,
      label: "VIEW PLANS",
    },
  ];

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

  function renderLinks(links, block) {
    return links.map((link) => {
      const type = link.type;
      if (type === TEXT_TYPE) {
        return <Link block={block} linkText={link.label} />;
      } else if (type === BTN_TYPE) {
        return <Button block={block} btnText={link.label} />;
      } else {
        return <div></div>;
      }
    });
  }

  function resizeWindow() {
    if (window.innerWidth > 1140) {
      setMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  });

  return (
    <div className="page-container">
      <div className="page">
        <Header
          navLinks={renderLinks(navLinks, "header")}
          menu={menu}
          setMenu={setMenu}
        />
        <section className="intro">
          {menu && (
            <div className="intro__menu">{renderLinks(navLinks, "intro")}</div>
          )}
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
