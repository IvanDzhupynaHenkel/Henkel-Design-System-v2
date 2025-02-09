// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoWA9N0rcmBwOAWvmNkPNzy4x0V5qMTPk",
  authDomain: "cursor-ai-1-661f8.firebaseapp.com",
  projectId: "cursor-ai-1-661f8",
  storageBucket: "cursor-ai-1-661f8.firebasestorage.app",
  messagingSenderId: "632350823628",
  appId: "1:632350823628:web:c8b8dfb0f54b2cfc03de69"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

