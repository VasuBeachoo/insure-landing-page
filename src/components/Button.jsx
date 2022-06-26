const Button = ({ block, btnText }) => {
  return <button className={`${block}__btn`}>{btnText}</button>;
};

export default Button;
