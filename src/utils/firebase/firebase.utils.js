import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8gagDxYgsBdToKRkIfRJQuOolF1rINJU",
  authDomain: "cloth-king-db.firebaseapp.com",
  projectId: "cloth-king-db",
  storageBucket: "cloth-king-db.appspot.com",
  messagingSenderId: "390051172721",
  appId: "1:390051172721:web:c67e908913b6c1e2e366d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);