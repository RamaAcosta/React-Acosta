import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBsq4k08dHvWjA8H630dErleO9AMtMJtSc',
  authDomain: 'acosta-coderhouse.firebaseapp.com',
  projectId: 'acosta-coderhouse',
  storageBucket: 'acosta-coderhouse.appspot.com',
  messagingSenderId: '957097874009',
  appId: '1:957097874009:web:3fca554ace53236e04d748',
  measurementId: 'G-MZ4KNXBVEM',
}

// Initialize Firebase
initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
