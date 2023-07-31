import "./forminput.scss";

const FormInput = ({ label, ...otherprops }) => {
 return (
  <div className="form-input-cont">
   <input
    className="form-input"
    {...otherprops}
   />
   {label && (
    <label
     className={`${
      otherprops.value.lenght ? "shrink" : ""
     } form-input-label`}
    >
     {label}
    </label>
   )}
  </div>
 );
};
export default FormInput;
