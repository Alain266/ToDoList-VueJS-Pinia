import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChe4yntohE1ntk4fIxslkB_Ixl6k95c4g",
    authDomain: "todolist-32d17.firebaseapp.com",
    projectId: "todolist-32d17",
    storageBucket: "todolist-32d17.appspot.com",
    messagingSenderId: "548994575919",
    appId: "1:548994575919:web:f48a8f1499744f8ad3a0da",
    measurementId: "G-DDGF7SHZFY"
};

// Initialize Firebase
const appFirestore = initializeApp(firebaseConfig);

const db = getFirestore(appFirestore);
const docRef = doc(db, "notes/3d0hMpovcCJKnPNUQvCV");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!"); 
}


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
