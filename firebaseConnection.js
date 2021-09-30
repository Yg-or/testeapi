require('dotenv').config()
const firebase = require('firebase/app').default;

const firebaseConfig = {
  apiKey: process.env.DB_APIKEY,
  authDomain: process.env.DB_AUTHDOMAIN,
  projectId: process.env.DB_PROJECTID,
  storageBucket: process.env.DB_STORAGEBUCKET,
  messagingSenderId: process.env.DB_MESSAGING,
  appId: process.env.DB_APPID
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

module.exports = firebase;
