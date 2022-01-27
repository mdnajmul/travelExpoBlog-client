import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (name, email, password, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sessionStorage.setItem("email", email);
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sessionStorage.setItem("email", email);
        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGoogle = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        sessionStorage.setItem("email", user.email);
        saveUser(user.email, user.displayName, user.phoneNumber, "PUT");
        setAuthError("");
        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("admin");
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  // Observing user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const saveUser = (email, displayName, phoneNumber, method) => {
    const user = { email, displayName, phoneNumber };
    fetch("https://mighty-savannah-90389.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Redirect Initial Page
  const redirectInitialPage = (navigate, location) => {
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return {
    user,
    isLoading,
    setIsLoading,
    authError,
    registerUser,
    loginUser,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
