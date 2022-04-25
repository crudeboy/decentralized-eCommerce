require('dotenv').config();
console.log(process.env.FIREBASE_API_KEY, "API KEY")

const firebaseConfig = {
  apiKey: 'AIzaSyBAAfEAmSBKxnujHYnOBT6xFJBqigjYj0w',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

export default firebaseConfig;