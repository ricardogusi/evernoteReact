import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAfNoz3CY8cJcjR30WpP41maZONWWpV9FI",
  authDomain: "evernotereact.firebaseapp.com",
  databaseURL: "https://evernotereact.firebaseio.com",
  projectId: "evernotereact",
  storageBucket: "evernotereact.appspot.com",
  messagingSenderId: "280669860495",
  appId: "1:280669860495:web:2f2800cd5d78ab5e25f6fa",
  measurementId: "G-NY3NCG2JLN",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
