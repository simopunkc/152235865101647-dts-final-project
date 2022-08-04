import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "proa-react-2b.firebaseapp.com",
    projectId: "proa-react-2b",
    storageBucket: "proa-react-2b.appspot.com",
    messagingSenderId: "573000133996",
    appId: "1:573000133996:web:cbe62943f90c7e01c19749"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };