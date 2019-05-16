import * as firebase from "firebase/app";
import "firebase/firestore";
// const serviceAccount = require('./secrets.json');

const firebaseConfig = {
  apiKey: "AIzaSyCnHWoy6IN4OWzL7pH7Up7xHUsMYQx9Jc0",
  authDomain: "softball-lineup-app-875fa.firebaseapp.com",
  databaseURL: "https://softball-lineup-app-875fa.firebaseio.com",
  projectId: "softball-lineup-app-875fa",
  storageBucket: "softball-lineup-app-875fa.appspot.com",
  messagingSenderId: "540832053515"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export 

// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// });

// const firestore = admin.firestore()


// export default class Firestore {

//   constructor() {
//     this.db = firestore.collection('players')
//   }

//   addPlayer(name, gender) {
//     console.log('>>>>>> name', name)
//     const playerRef = this.db.doc(name)
//     playerRef.set({ playerGender: gender})
//   }
 
// }



