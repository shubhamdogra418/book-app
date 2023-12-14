import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCD_kybx5ZCDkIRYKVqKKRvkAc5QGNYPMw",
    authDomain: "app-b3bf6.firebaseapp.com",
    projectId: "app-b3bf6",
    storageBucket: "app-b3bf6.appspot.com",
    messagingSenderId: "405709897722",
    appId: "1:405709897722:web:80762797fa04baddf6ae43",
    databaseURL: "https://app-b3bf6-default-rtdb.firebaseio.com",
  };

  export const app= initializeApp(firebaseConfig);