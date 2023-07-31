import "./signin.scss";
import {
 signInWithGoogleRedirect,
 Authentication,
} from "../../firebase/firebase";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { CreateUserDocument } from "../../firebase/firebase";
import SignUp from "../../components/signup/signup";

const SignIn = () => {
 useEffect(() => {
  const fetchData = async () => {
   const response = await getRedirectResult(
    Authentication
   );
   console.log(response);
   if (response) {
    await CreateUserDocument(response.user);
   }
  };
  fetchData();
 }, []);
 /* const logGoogleUser = async () => {
  const response =
   await signInWithGoogleRedirect();
  console.log(response);
  await createUserDocument(response);
 };*/

 return (
  <div>
   <h1>Here</h1>
   <button onClick={signInWithGoogleRedirect}>
    SIGNIN WITH GOOGLE
   </button>
   <SignUp />
  </div>
 );
};
export default SignIn;
