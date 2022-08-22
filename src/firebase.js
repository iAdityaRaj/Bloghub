import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIYVwzjJH3kiPFEG_gHrwvEsoFKVI4tqQ",
    authDomain: "blogger-app-32072.firebaseapp.com",
    projectId: "blogger-app-32072",
    storageBucket: "blogger-app-32072.appspot.com",
    messagingSenderId: "8663583805",
    appId: "1:8663583805:web:98648a3ff402e66751ae54"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth ,db, storage };