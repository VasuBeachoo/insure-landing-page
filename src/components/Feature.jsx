const Feature = ({
  block = "features",
  iconSrc,
  iconAlt,
  headingText,
  paragraphText,
}) => {
  return (
    <div className={`${block}__feature`}>
      <img src={iconSrc} alt={iconAlt} className={`${block}__icon`} />
      <h3 className={`${block}__heading`}>{headingText}</h3>
      <p className={`${block}__paragraph`}>{paragraphText}</p>
    </div>
  );
};

export default Feature;
