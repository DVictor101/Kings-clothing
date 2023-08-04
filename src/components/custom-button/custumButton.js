import "./custombuttonstyle.scss";

export const BUTTON_TYPE = {
 google: "google-sign-in",
 inverted: "inverted",
};

const Button = ({
 children,
 buttonType,
 ...otherProps
}) => {
 return (
  <button
   className={`button-cont ${BUTTON_TYPE[buttonType]}`}
   {...otherProps}
  >
   {children}
  </button>
 );
};
export default Button;
