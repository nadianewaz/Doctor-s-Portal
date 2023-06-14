import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Loginn/LogIn/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signOut } from "firebase/auth";

// initialization  
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({}); 
    const [isLoading, setIsLoading] = useState(true); 
    const [authError, setAuthError] = useState(''); 


    const auth = getAuth();

    const registerUser = (email, password) =>{
      setIsLoading(true); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError(''); 
            const user = userCredential.user;
          })
          .catch((error) => {
            setAuthError(error.message);
       
          })
          .finally(() => setIsLoading(false)); 
        

    }

    const logUser = ( email, password, location, history ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password) 
    .then((userCredential) => {
      const destination = location?.state?.form || '/';
      history.replace(destination); 
      setAuthError(''); 
    
    })
    .catch((error) => {
      setAuthError(error.message);
    
    })
    .finally(() => setIsLoading(false));

    }


//  observer user state 
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
             
            } else {
                setUser({}); 
             }
             setIsLoading(false); 
          });
          return () => unsubscribe;
    }, []);

    const logout = () =>{
      setIsLoading(true); 
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
          
    }
                 
    return{
        user,
        isLoading,
        authError,
        registerUser,
        logUser,
        logout,


    }


}
export default useFirebase;