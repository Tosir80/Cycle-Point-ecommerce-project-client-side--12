import { useEffect, useState } from "react"
import intialzizeFirebase from "../Firebase/firebase.init"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';

intialzizeFirebase()
  const auth = getAuth();

const useFirbase=()=>{
 const [user,setUser]=useState({})
 const [authError ,setAuthError]=useState('')
 const[isLoading,setIsLoading]=useState(true)
 const [admin , setAdmin] =useState(false)
//  email password login--
const register=(email, password,name,history)=>{
  setIsLoading(true);
 createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    setAuthError('')
    const newUser={ email, displayName:name}
    setUser(newUser)

     savedUser(email,name,"POST");
    // for send name on firebase 
    updateProfile(auth.currentUser, {
      displayName:name
    })
      .then(() => { })
      .catch((error) => {
      });
    history.replace('/')
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     setAuthError(errorMessage)
     // ..
   })
   .finally(() => setIsLoading(false));
}

// sign in with email password 
const logIn = (email, password, location, history) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location.state?.from || '/dashboard';
        history.push(destination);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setAuthError(errorMessage);
    });
};


 //  google login---
const googleProvider=new GoogleAuthProvider()
const loginUsingGoogle=(location,history)=>{
  setIsLoading(true);
 signInWithPopup(auth, googleProvider)
   .then((result) => {
     const destination = location.state?.from || '/dashboard';
     history.push(destination);
     savedUser(result.user.email, result.user.displayName, 'PUT');
     setUser(result.user);
     
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     setAuthError(errorMessage);

     // ...
   })
   .finally(() => setIsLoading(false));
  }

const logOut=()=>{
  setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
}

useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      } else {
       setUser({})
      }
       setIsLoading(false);
    })
    return ()=>unsubscribed
},[])

// send data to mongodb server
const savedUser=(email,displayName,method)=>{
  const user = {email,displayName}
  fetch('https://peaceful-harbor-44338.herokuapp.com/saveduser', {
    method: method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  }).then();
}

//isadmin check 

useEffect(()=>{
  fetch(`https://peaceful-harbor-44338.herokuapp.com/makeadmin/${user.email}`)
    .then((res) => res.json())
    .then((data) => setAdmin(data.admin))
},[user.email])



return {
  user,
  authError,
  register,
  loginUsingGoogle,
  logIn,
  logOut,
  isLoading,
  admin
};
}

export default useFirbase