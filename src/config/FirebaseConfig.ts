
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore,} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDOewzfF34csKgItX4PdQ0N33OFOk5IIwY",
  authDomain: "blogging-react-6e3c2.firebaseapp.com",
  projectId: "blogging-react-6e3c2",
  storageBucket: "blogging-react-6e3c2.appspot.com",
  messagingSenderId: "154193649014",
  appId: "1:154193649014:web:5df971781221df37452e57"
};


const app = initializeApp(firebaseConfig);

//
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const DB = getFirestore(app);