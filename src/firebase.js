import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuguqgcvLYYCN2dRKGtIWX7IGuCU-P_yg",
  authDomain: "clone-4889d.firebaseapp.com",
  projectId: "clone-4889d",
  storageBucket: "clone-4889d.appspot.com",
  messagingSenderId: "818721765997",
  appId: "1:818721765997:web:45ac63719e2e6397aa1d64",
  measurementId: "G-74D57FDQWM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
