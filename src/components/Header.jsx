import logo from "../assets/logo.svg";
import Link from "./Link";
import Button from "./Button";

const Header = () => {
  const block = "header";
  const navLinks = ["HOW WE WORK", "BLOG", "ACCOUNT"];

  return (
    <header className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      <div className={`${block}__links`}>
        {navLinks.map((linkText) => (
          <Link block={block} linkText={linkText} />
        ))}
        <Button block={block} btnText="VIEW PLANS" />
      </div>
    </header>
  );
};

export default Header;
