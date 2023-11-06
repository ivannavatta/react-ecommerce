import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPp1cdfqJUOKmu9TC5B-U6vX4IydfppHk",
    authDomain: "ecommerce-react-c1b13.firebaseapp.com",
    projectId: "ecommerce-react-c1b13",
    storageBucket: "ecommerce-react-c1b13.appspot.com",
    messagingSenderId: "296523590730",
    appId: "1:296523590730:web:a491fc369e98292b528ab3"
  };
   const app = initializeApp(firebaseConfig);

   export  const db = getFirestore(app)