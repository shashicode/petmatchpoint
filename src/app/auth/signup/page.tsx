"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useRouter } from "next/navigation";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsi3zqlMcsXigNHGxoIeseG-NqdIwtFB0",
  authDomain: "petmatchpoint-4d9de.firebaseapp.com",
  projectId: "petmatchpoint-4d9de",
  storageBucket: "petmatchpoint-4d9de.appspot.com",
  messagingSenderId: "298616963371",
  appId: "1:298616963371:web:d71c311dde8eae17f8456e",
  measurementId: "G-TDH14HCCB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";

const provider = new GoogleAuthProvider();

export default function AuthPageSignup() {
  const { push } = useRouter();

  async function createUser(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      push("/");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // const userData = {
      //   email : currentUser.email,
      //   displayName: currentUser.displayName,
      //   phoneNumber : currentUser.phoneNumber,
      //   photoURL: currentUser.photoURL,
      //   emailVerified : currentUser.emailVerified,
      //   phoneVerified : false,
      //   displayImage: currentUser.photoURL
      // }
      // createUser(`/api/v1/user`, userData).then((data) => {
      //   console.log('After api call: ', data);
      // });
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const [email, SetEmail] = useState("");
  const [pass, SetPass] = useState("");

  const signupWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result: any) => {
        // console.log('custom signup: ', result.user.auth)
        const currentUser = result.user.auth.currentUser.auth.currentUser;

        const userData = {
          email: currentUser.email,
          displayName: currentUser.displayName,
          phoneNumber: currentUser.phoneNumber,
          photoURL: currentUser.photoURL,
          emailVerified: currentUser.emailVerified,
          phoneVerified: false,
          displayImage: currentUser.photoURL,
        };
        createUser(`/api/v1/user`, userData).then((data) => {
          // console.log("After api call: ", data);
        });
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // console.log("google signup failure", error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          SetWrongEmailPass(true)
        }
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [showSpinner, SetShowSpinner] = useState(false);

  const signupWithEmailPass = (email: string, password: string) => {
    SetShowSpinner(true);
    if (email.length === 0 || validateEmail(email) === null) {
      SetFormErrors({
        emailError: true,
        passError: false,
      });
      SetErrorMsg("Please provide a valid email");
      SetShowSpinner(false);
      return;
    } else {
      SetFormErrors({
        emailError: false,
        passError: false,
      });
      SetErrorMsg("");
    }

    if (password.length < 6) {
      SetFormErrors({
        emailError: false,
        passError: true,
      });
      SetErrorMsg("Password must be minimum 6 characters long");
      SetShowSpinner(false);
      return;
    } else {
      SetFormErrors({
        emailError: false,
        passError: false,
      });
      SetErrorMsg("");
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user: any = userCredential.user;
        const currentUser = user.auth.currentUser.auth.currentUser;

        const userData = {
          email: currentUser.email,
          displayName: currentUser.displayName,
          phoneNumber: currentUser.phoneNumber,
          photoURL: currentUser.photoURL,
          emailVerified: currentUser.emailVerified,
          phoneVerified: false,
          displayImage: currentUser.photoURL,
        };
        createUser(`/api/v1/user`, userData).then((data) => {
          // console.log("After api call: ", data);
        });
        // ...
      })
      .catch((error) => {
        // console.log("Custom registration failed: ", error);
        SetShowSpinner(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          SetWrongEmailPass(true)
        }
        // ..
      });
  };

  const [formErrors, SetFormErrors] = useState({
    emailError: false,
    passError: false,
  });

  const [errorMsg, SetErrorMsg] = useState("");
  const [wrongEmailPass, SetWrongEmailPass] = useState(false)
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center">
          <div className="bg-gray-600 p-12 w-[500px] text-center">
            <h1 className="text-4xl text-white font-extrabold uppercase mb-8">
              Signup
            </h1>
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  onChange={(e) => {
                    SetEmail(e.target.value);
                  }}
                  className="border-solid border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                  Email address
                </label>
                {formErrors.emailError && (
                  <p className="text-red-500 font-bold text-lg">{errorMsg}</p>
                )}
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  onChange={(e) => {
                    SetPass(e.target.value);
                  }}
                  className="border-solid border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                  Password
                </label>
                {formErrors.passError && (
                  <p className="text-red-500 font-bold text-lg">{errorMsg}</p>
                )}
              </div>

              {wrongEmailPass && 
                <div className="text-red-500 font-bold text-xl mb-3">User already exists</div>
              }
              <div
                onClick={() => signupWithEmailPass(email, pass)}
                className="hover:cursor-pointer text-center inline-block w-full rounded  bg-[#4285F4] hover:bg-[#4285F4]/90 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {showSpinner ? (
                  <>
                    <div className="flex justify-center" role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </>
                ) : (
                  <span>Signup</span>
                )}
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <div className="px-6 sm:px-0">
                <div
                  onClick={signupWithGoogle}
                  className="hover:cursor-pointer text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Signup with Google<div></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
