const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyAUn-Mb4-pL2CDSQhbuLKU6-YSjq_wMSHc",
  authDomain: "meencurta.firebaseapp.com",
  projectId: "meencurta",
  storageBucket: "meencurta.appspot.com",
  messagingSenderId: "793430984242",
  appId: "1:793430984242:web:84c23ef0569083594a9e2b"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const Links = db.collection('Links');

module.exports = Links;