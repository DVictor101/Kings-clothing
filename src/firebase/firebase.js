import { initializeApp } from "firebase/app";

import {
 getAuth,
 signInWithRedirect,
 GoogleAuthProvider,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged,
} from "firebase/auth";
import {
 getFirestore,
 doc,
 getDoc,
 setDoc,
} from "firebase/firestore";

const firebaseConfig = {
 apiKey:
  "AIzaSyC5AGgfT3EM9s7GGAfewiIdJUGH1TfWbtw",
 authDomain:
  "kings-clothing-1c98a.firebaseapp.com",
 projectId: "kings-clothing-1c98a",
 storageBucket:
  "kings-clothing-1c98a.appspot.com",
 messagingSenderId: "751219865097",
 appId:
  "1:751219865097:web:09d4a6aaa099b83516aad8",
 measurementId: "G-M6028MSWTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const database = getFirestore(app);

provider.setCustomParameters({
 prompt: "select_account",
});
export const Authentication = getAuth(app);
export const signInWithGoogleRedirect = () =>
 signInWithRedirect(Authentication, provider);
export const CreateUserDocument = async (
 userAuth,
 additionalInfo = {}
) => {
 if (!userAuth) return;
 const userDoc = doc(
  database,
  "user",
  userAuth.uid
 );
 console.log(userDoc);
 const userSnapshot = await getDoc(userDoc);
 console.log(userSnapshot.exists());

 if (!userSnapshot.exists()) {
  //userdata does not exist
  const { displayName, email } = userAuth;
  const createDate = new Date();
  try {
   await setDoc(userDoc, {
    displayName,
    email,
    createDate,
    ...additionalInfo,
   });
  } catch (err) {
   console.log(err);
  }
 }
};
export const CreateUserWithEmailAndPassword =
 async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(
   Authentication,
   email,
   password
  );
 };
export const SignInUserWithEmailAndPassword =
 async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(
   Authentication,
   email,
   password
  );
 };

export const SignOutUser = async () =>
 await signOut(Authentication);

export const onAuthStateChangedLiistener = (
 callback
) => {
 onAuthStateChanged(Authentication, callback);
};
