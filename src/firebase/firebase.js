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
 collection,
 writeBatch,
 query,
 getDocs,
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
export const addCollectionDocument = async (
 collectionKey,
 addedObject
) => {
 const collectionReference = collection(
  database,
  collectionKey
 );
 const batch = writeBatch(database);
 addedObject.forEach((object) => {
  const docRef = doc(
   collectionReference,
   object.title.toLowerCase()
  );
  batch.set(docRef, object);
 });

 await batch.commit();
 console.log("done");
};

export const getCategoryAndDocument =
 async () => {
  const collectionReference = collection(
   database,
   "categories"
  );
  const q = query(collectionReference);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(
   (acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
   },
   {}
  );
  return categoryMap;
 };

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
