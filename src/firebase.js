import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";



export const firebaseConfig = {
  apiKey: "AIzaSyCS0HABL3xakTOLXDBgxHOspyksvU_Oe_M",
  authDomain: "disney-plus-f64b3.firebaseapp.com",
  projectId: "disney-plus-f64b3",
  storageBucket: "disney-plus-f64b3.appspot.com",
  messagingSenderId: "409909850051",
  appId: "1:409909850051:web:d47c91fe0359d999f5d776"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;