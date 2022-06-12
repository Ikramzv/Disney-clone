import  { initializeApp }  from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    // firebaseconfig keys
    apiKey: "AIzaSyDdvbpBGMPfkpQmMpdd2m7HEhwOM-pyeU4",
    authDomain: "disneyplus-clone-d8672.firebaseapp.com",
    projectId: "disneyplus-clone-d8672",
    storageBucket: "disneyplus-clone-d8672.appspot.com",
    messagingSenderId: "58351980408",
    appId: "1:58351980408:web:f7de3121dd10e7d0adc28d",
    measurementId: "G-3C45DXY5ED"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)

export { auth , provider , storage }
export default db;