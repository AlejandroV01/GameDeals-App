// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBVyPHyFC4bs7vbzca7lwxsWS4iwxdPS2g',
    authDomain: 'gamedeal-app.firebaseapp.com',
    projectId: 'gamedeal-app',
    storageBucket: 'gamedeal-app.appspot.com',
    messagingSenderId: '620686706388',
    appId: '1:620686706388:web:3bc48479ccb0aad62add41',
    measurementId: 'G-PZ22SP78CW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
