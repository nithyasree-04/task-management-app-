// Import Firebase modules
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBweRyZCIoM6v3VA2LZCoi_fgZrE9lqrZE',
  authDomain: 'task-management-app-c5939.firebaseapp.com',
  projectId: 'task-management-app-c5939',
  storageBucket: 'task-management-app-c5939.firebasestorage.app',
  messagingSenderId: '649960394905',
  appId: '1:649960394905:web:cc7cd56daf7ba1e13a6808',
  measurementId: 'G-FRB6DE55XG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider()

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// Export for use in other components
export { auth, provider, db }
