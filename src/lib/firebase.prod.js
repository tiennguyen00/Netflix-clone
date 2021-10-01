import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBGzyoBOsZRsZ9LJWC2kOI7xmG2LPpm46w',
  authDomain: 'netflix-bf41e.firebaseapp.com',
  projectId: 'netflix-bf41e',
  storageBucket: 'netflix-bf41e.appspot.com',
  messagingSenderId: '472329169335',
  appId: '1:472329169335:web:c11c93c3523c4cecf32032',
  measurementId: 'G-KZ7X7Y0BK2',
};
const firebaseApp = initializeApp(config);
const db = getFirestore();

// Insert data only for first time
// seedDatabase(db);

export { firebaseApp, db };
