import { initializeApp } from 'firebase/app';
//firebase firestore function
import { getFirestore, collection, getDocs,addDoc ,doc,getDoc} from 'firebase/firestore/lite';
//firebase storage function
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoVZzDdFkm6q-k2C4vdzcdiJAMnYqjFPQ",
    authDomain: "vueonlinestore-c8846.firebaseapp.com",
    projectId: "vueonlinestore-c8846",
    storageBucket: "vueonlinestore-c8846.appspot.com",
    messagingSenderId: "1019943629624",
    appId: "1:1019943629624:web:94fe8ddedf4e4646dfc7cd"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app,db,collection,getDocs,getStorage, ref,addDoc, doc,getDoc,uploadBytesResumable, getDownloadURL}