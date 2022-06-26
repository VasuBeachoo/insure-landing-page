import Button from "./Button";

const CtaBlock = ({ block = "cta", headingText, btnText }) => {
  return (
    <div className={`${block}__container`}>
      <h1 className={`${block}__heading`}>{headingText}</h1>
      <Button block={block} btnText={btnText} />
    </div>
  );
};

export default CtaBlock;
