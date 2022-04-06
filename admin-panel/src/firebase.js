import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBw2jTplEj6C26qxyFnb9RK1MatdhmszQo",
  authDomain: "reactflix-4d4e6.firebaseapp.com",
  projectId: "reactflix-4d4e6",
  storageBucket: "reactflix-4d4e6.appspot.com",
  messagingSenderId: "480519733464",
  appId: "1:480519733464:web:22a2d02653752ec12e17ad",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
