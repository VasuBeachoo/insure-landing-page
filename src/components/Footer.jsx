import logo from "../assets/logo.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import SocialIcon from "./SocialIcon";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const block = "footer";

  const socialIcons = [
    {
      src: facebookIcon,
      alt: "facebook-icon",
    },
    {
      src: twitterIcon,
      alt: "twitter-icon",
    },
    {
      src: pinterestIcon,
      alt: "pinterest-icon",
    },
    {
      src: instagramIcon,
      alt: "instagram-icon",
    },
  ];

  const footerColumns = [
    {
      heading: "OUR COMPANY",
      links: ["HOW WE WORK", "WHY INSURE?", "VIEW PLANS", "REVIEWS"],
    },
    {
      heading: "HELP ME",
      links: ["FAQ", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"],
    },
    {
      heading: "CONTACT",
      links: ["SALES", "SUPPORT", "LIVE CHAT"],
    },
    {
      heading: "OTHERS",
      links: ["CAREERS", "PRESS", "LICENSES"],
    },
  ];

  return (
    <footer className={`${block}`}>
      <div className={`${block}__container`}>
        <img src={logo} alt="logo" className={`${block}__logo`} />
        <div className={`${block}__social-icons`}>
          {socialIcons.map((icon) => (
            <SocialIcon iconSrc={icon.src} iconAlt={icon.alt} />
          ))}
        </div>
      </div>
      <hr className={`${block}__divider`} />
      <div className={`${block}__container`}>
        {footerColumns.map((column) => (
          <FooterColumn heading={column.heading} links={column.links} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
