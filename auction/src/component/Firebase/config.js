import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTZqXnaCLbrIbrot-UlWkA_jqnyptm7kE",
  authDomain: "aleena-auction-fdb9f.firebaseapp.com",
  projectId: "aleena-auction-fdb9f",
  storageBucket: "aleena-auction-fdb9f.appspot.com",
  messagingSenderId: "1070458277320",
  appId: "1:1070458277320:web:58b82504314098273544fd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;