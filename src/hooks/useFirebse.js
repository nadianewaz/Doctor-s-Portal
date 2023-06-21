import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Loginn/LogIn/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

// initialization  
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({}); 
    const [isLoading, setIsLoading] = useState(true); 
    const [authError, setAuthError] = useState(''); 


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider(); 
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

    const logUser = ( email, password, location, navigate ) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password) 
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      navigate(destination); 
      setAuthError(''); 
    
    })
    .catch((error) => {
      setAuthError(error.message);
    
    })
    .finally(() => setIsLoading(false));

    }


        const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
                
         signInWithPopup(auth, googleProvider)
        .then((result) => {
          
          const user = result.user;
          setAuthError('');
        }).catch((error) => {
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
        signInWithGoogle,
        logout,


    }


}
export default useFirebase;