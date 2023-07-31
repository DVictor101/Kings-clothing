import "./custombutton.scss";

const BUTTON_TYPE = {
 google: "google-sign-in",
 inverted: "inverted",
};
const CustomButton = ({
 children,
 buttonType,
 ...otherProps
}) => {
 return (
  <button
   className={`btn-cont ${BUTTON_TYPE[buttonType]}`}
   {...otherProps}
  >
   {children}
  </button>
 );
};
export default CustomButton;
