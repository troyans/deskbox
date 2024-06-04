// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoonpHInhM7v_-0gbC06f10IYi85ORF40",
  authDomain: "chatver-26bc4.firebaseapp.com",
  projectId: "chatver-26bc4",
  storageBucket: "chatver-26bc4.appspot.com",
  messagingSenderId: "293320483494",
  appId: "1:293320483494:web:0e667530d2ee432bc10a67"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const STORAGE_FOLDER_PATH = "gs://chatver-26bc4.appspot.com";
export const storage = getStorage(app, STORAGE_FOLDER_PATH);

export default app;