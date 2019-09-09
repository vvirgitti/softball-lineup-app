import * as firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

firebase.initializeApp({
  apiKey: config.firebaseApiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
});

const firestore = firebase.firestore();

export default firestore


