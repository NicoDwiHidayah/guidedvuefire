import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({
        databaseURL: 'https://gdvuefire7169-default-rtdb.firebaseio.com/'
    })
    .database

export const drinkref = db.ref('drinks')