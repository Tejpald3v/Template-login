// import { app_firebase } from './firebase.js'
var app = {};
(function() {
    // var firebaseConfig = {
    //     apiKey: "AIzaSyCguBJsa2VsyZSQVKR8xf20w1iY87aaGWE",
    //     authDomain: "authenticate-dfaa4.firebaseapp.com",
    //     databaseURL: "https://authenticate-dfaa4.firebaseio.com",
    //     projectId: "authenticate-dfaa4",
    //     storageBucket: "authenticate-dfaa4.appspot.com",
    //     messagingSenderId: "831748794249",
    //     appId: "1:831748794249:web:66b23dd66a1905e3e1a358"
    // };

    var firebase = app_firebase;
    // firebase.initializeApp(firebaseConfig);
    function logOut() {
        
        firebase.auth().signOut();
        window.location.href = "forms.html";
    }
    app.logOut = logOut;
})()