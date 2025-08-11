// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDndFMBiC24YHdS3jKhCQfQR3hds8_76Ww",
  authDomain: "table-558e3.firebaseapp.com",
  projectId: "table-558e3",
  storageBucket: "table-558e3.firebasestorage.app",
  messagingSenderId: "644679614495",
  appId: "1:644679614495:web:a2ac2cbace0319c464552a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);