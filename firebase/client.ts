import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-0ch6VYzIdEmxDTOB1VdXOVWkQ9f0K80',
  authDomain: 'aintervista.firebaseapp.com',
  projectId: 'aintervista',
  storageBucket: 'aintervista.firebasestorage.app',
  messagingSenderId: '809603241981',
  appId: '1:809603241981:web:4c70a20aff2d83a346eb94',
  measurementId: 'G-W5D77V86KC',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
