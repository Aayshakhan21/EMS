import { app } from "../../../config/firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

// register a user:
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    alert("User Created successfully...");
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    // Console the error
    console.log(errorCode, errorMessage);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // console.log(user.reloadUserInfo.email);
    return user.reloadUserInfo.email;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    // Console the error
    console.log(errorCode, errorMessage);
  }
};

// Sign out a user:
export const logoutUser = async () => {
  try {
    const isSignedOut = await signOut(auth);
    console.log("Signed out successfully...");
  } catch (err) {
    console.log(err);
  }
};
