import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDtN1RvPyZVrT06b4CpYzTfNx_2BmCVgmo",
  authDomain: "tickets-263cb.firebaseapp.com",
  projectId: "tickets-263cb",
  storageBucket: "tickets-263cb.firebasestorage.app",
  messagingSenderId: "997815311745",
  appId: "1:997815311745:web:101beddf984206e6875c80",
  measurementId: "G-F2CQ83T5WY"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };