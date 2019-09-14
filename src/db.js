import firebase from 'firebase/app'
import 'firebase/database'

const db = firebase
  .initializeApp({ databaseURL: 'https://th1nkk1d-online-portfolio.firebaseio.com' })
  .database()

export default db
