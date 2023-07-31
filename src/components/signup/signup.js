import "./signup.scss";
import { useState } from "react";
import {
 CreateUserWithEmailAndPassword,
 CreateUserDocument,
} from "../../firebase/firebase";
import FormInput from "../form-input/formInput";
import CustomButton from "../custom-button/custumButton";

const initalFormFields = {
 displayName: "",
 email: "",
 password: "",
 confirmpassword: "",
};

const SignUp = () => {
 const [Formfields, setFormfields] = useState(
  initalFormFields
 );
 const {
  displayName,
  email,
  password,
  confirmpassword,
 } = Formfields;
 console.log(Formfields);
 const resetFormFields = () => {
  setFormfields(initalFormFields);
 };

 const hanleSubmit = async (event) => {
  event.preventDefault();
  if (password !== confirmpassword) {
   alert("password does not match");
   return;
  }
  try {
   const { user } =
    await CreateUserWithEmailAndPassword(
     email,
     password
    );
   await CreateUserDocument(user, {
    displayName,
   });
   resetFormFields();
  } catch (err) {
   if (err.code === "auth/email-already-in-use") {
    alert("Email already in use");
   } else {
    console.log(err);
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
   <h1>Dont have an account</h1>
   <span>SignUp wit your email and password</span>
   <form onSubmit={hanleSubmit}>
    <FormInput
     label="Display Name"
     type="text"
     value={displayName}
     name="displayName"
     onChange={handleChange}
     required
    />

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

    <FormInput
     label="confirm Password"
     type="password"
     value={confirmpassword}
     name="confirmpassword"
     onChange={handleChange}
     required
    />
    <CustomButton type="submit">
     Sign Up{" "}
    </CustomButton>
   </form>
  </div>
 );
};
export default SignUp;
