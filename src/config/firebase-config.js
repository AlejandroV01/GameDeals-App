// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const keys = process.env
console.log(keys.REACT_APP_FIREBASE_API)
const firebaseConfig = {
    apiKey: `${keys.REACT_APP_FIREBASE_API}`,
    authDomain: 'gamedeal-app.firebaseapp.com',
    projectId: 'gamedeal-app',
    storageBucket: 'gamedeal-app.appspot.com',
    messagingSenderId: `${keys.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${keys.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${keys.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
