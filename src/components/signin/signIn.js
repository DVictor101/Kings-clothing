import "./signin.scss";
import { useState } from "react";
import FormInput from "../form-input/formInput";
import CustomButton from "../custom-button/custumButton";

import {

 signInWithGoogleRedirect,
 SignInUserWithEmailAndPassword,
} from "../../firebase/firebase";

const initalFormFields = {
 email: "",
 password: "",
};

const SignIn = () => {
 const SignInWithGoogle = async () => {
  
   await signInWithGoogleRedirect();
 
 };

 const [Formfields, setFormfields] = useState(
  initalFormFields
 );
 const { email, password } = Formfields;

 //const { setCurrentUser } =
 //useContext(UserContext);
 const resetFormFields = () => {
  setFormfields(initalFormFields);
 };

 const hanleSubmit = async (event) => {
  event.preventDefault();

  try {
   await SignInUserWithEmailAndPassword(
    email,
    password
   );
   // setCurrentUser(user)
   resetFormFields();
  } catch (err) {
   if (err.code === "auth/wrong-password") {
    alert("Wrong Password Entered");
    resetFormFields();
   } else if (
    err.code === "auth/user-not-found"
   ) {
    alert(
     "No account found for this user, Signup with us"
    );
    resetFormFields();
   }
  }
 };
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormfields({
   ...Formfields,
   [name]: value,
  });
 };

 return (
  <div className="sign-up-container">
   <h1>Already have an account</h1>
   <span>
    SignIn with your Email and Password
   </span>
   <form onSubmit={hanleSubmit}>
    <FormInput
     label="Email"
     type="email"
     value={email}
     name="email"
     onChange={handleChange}
     required
    />
    <FormInput
     label="Password"
     type="password"
     value={password}
     name="password"
     onChange={handleChange}
     required
    />
    <div className="btn-container">
     <CustomButton type="submit">
      Sign In{" "}
     </CustomButton>
     <CustomButton
      type="button"
      buttonType="google"
      onClick={SignInWithGoogle}
     >
      Google Sign In
     </CustomButton>
    </div>
   </form>
  </div>
 );
};

export default SignIn;
