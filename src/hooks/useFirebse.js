import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Loginn/LogIn/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signOut } from "firebase/auth";

// initialization  
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({}); 
    const [isLoading, setisLoading] = useState(true); 
    const [authError, setauthError] = useState(' '); 


    const auth = getAuth();

    const registerUser = (email, password) =>{
      setisLoading(true); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setauthError(' '); 
            const user = userCredential.user;
          })
          .catch((error) => {
            setauthError = error.message;
       
          })
          .finally(() => setisLoading(false)); 
        

    }

    const logUser = ( email, password ) => {
      setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setauthError(' '); 
    
    })
    .catch((error) => {
      setauthError = error.message; 
    
    })
    .finally(() => setisLoading(false));

    }


//  observer user state 
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
             
            } else {
                setUser({}); 
             }
             setisLoading(false);
          });
          return () => unsubscribe;
    }, []);

    const logout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setisLoading(false));
          
    }
                 
    return{
        user,
        isLoading,
        registerUser,
        logUser,
        logout,


    }


}
export default useFirebase;