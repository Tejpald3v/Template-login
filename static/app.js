// Global variable. We will expose this global variable. It is good idea to wrap up the third party objects
// var app_firebase = {};
// import { app_firebase } from './firebase.js'
// Self evoked function, everything inside of this function is going to be private.
(function(){
    // This code is responsible to initialize the firebase application
    // Your web app's Firebase configuration
    // var firebase = app_firebase
    var firebaseConfig = {
        apiKey: "AIzaSyCguBJsa2VsyZSQVKR8xf20w1iY87aaGWE",
        authDomain: "authenticate-dfaa4.firebaseapp.com",
        databaseURL: "https://authenticate-dfaa4.firebaseio.com",
        projectId: "authenticate-dfaa4",
        storageBucket: "authenticate-dfaa4.appspot.com",
        messagingSenderId: "831748794249",
        appId: "1:831748794249:web:66b23dd66a1905e3e1a358"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const txtEmail = document.getElementById("email");
    const txtPassword = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
    const btnLogout = document.getElementById("btnLogout");

    btnLogin.addEventListener("click", e => {
        e.stopPropagation();
        // Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        // signin
        const prmise = auth.signInWithEmailAndPassword(email, pass);
        // console.log(prmise);
        prmise.catch(e => console.log(e.currentUser));
        // console.log(firebase.auth().currentUser.getIdToken(false));
    })

    // Add signup event
    btnSignup.addEventListener("click", e => {
        e.stopPropagation();
        // Get email and password
        // TODO: check for real emails
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // signin
        const prmise = auth.createUserWithEmailAndPassword(email, pass);
        prmise.catch(e => console.log(e.message));
        // console.log(firebase.auth().currentUser.getIdToken(false));

    });


    btnLogout.addEventListener("click", e => {
        e.stopPropagation();
        firebase.auth().signOut();
    })

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            // pageRedirect()
            // console.log(firebaseUser);
            console.log(firebase.auth().currentUser.getIdToken(false));
            
        } else {
            console.log("Not logged in");
            // btnLogout.classList.add("hide");
        }
    })
    // app_firebase = firebase;
    // app_firebase.logOut = logOut;
})()

function pageRedirect() {
    window.location.href = "home.html";
} 