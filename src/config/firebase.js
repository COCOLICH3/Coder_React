
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABnn5TRUB0l9FKrQsi9i7FmEUTITtewSA",
  authDomain: "ecommercereact-18002.firebaseapp.com",
  projectId: "ecommercereact-18002",
  storageBucket: "ecommercereact-18002.firebasestorage.app",
  messagingSenderId: "679170650888",
  appId: "1:679170650888:web:41764e62621d9f366372bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);