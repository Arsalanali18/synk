import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEb7ExW-mTjjbflI-K8AYvM6UPFdzzpL8",
  authDomain: "synkronize-smaildetection.firebaseapp.com",
  projectId: "synkronize-smaildetection",
  storageBucket: "synkronize-smaildetection.firebasestorage.app",
  messagingSenderId: "385001492541",
  appId: "1:385001492541:web:7dda9890e67e621fd65a54",
  measurementId: "G-2QKNFPF9RD"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
