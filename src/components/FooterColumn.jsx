import Link from "./Link";

const FooterColumn = ({ heading, links }) => {
  const block = "footer";

  return (
    <div className={`${block}__column`}>
      <h3 className={`${block}__heading`}>{heading}</h3>
      {links.map((linkText) => (
        <Link block={block} linkText={linkText} />
      ))}
    </div>
  );
};

export default FooterColumn;
