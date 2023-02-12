import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBtJBGDUFKK4_vns4GKTmU5LKTMLnzqZYk",
 authDomain: "alifataspace.firebaseapp.com",
 projectId: "alifataspace",
 storageBucket: "alifataspace.appspot.com",
 messagingSenderId: "788724365765",
 appId: "1:788724365765:web:c04d398e775a0d984873ac",
 measurementId: "G-ZWKSS1RDZZ"
}

const FireApp = initializeApp(firebaseConfig);
export const FireAuth = getAuth();