import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const intialzizeFirebase=()=>{
    initializeApp(firebaseConfig);
}
export default intialzizeFirebase