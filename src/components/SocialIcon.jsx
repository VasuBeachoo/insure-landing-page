const SocialIcon = ({ block = "footer", iconSrc, iconAlt }) => {
  return (
    <img src={iconSrc} alt={iconAlt} className={`${block}__social-icon`} />
  );
};

export default SocialIcon;
