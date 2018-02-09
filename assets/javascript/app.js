$(document).ready(function() {
  //Materialize CSS parralax function
  // $('.parallax').parallax();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBR4mFvJiYUIQDIVoDzKCWZyxyeJ-C5rCw",
    authDomain: "fir-project-ca268.firebaseapp.com",
    databaseURL: "https://fir-project-ca268.firebaseio.com",
    projectId: "fir-project-ca268",
    storageBucket: "",
    messagingSenderId: "60944439745"
  };

  firebase.initializeApp(config);
  console.log(firebase);

  //START AUTHENTICATION

  if (firebase.auth().currentUser != null) {
    goToHome();
  }

  else {
    console.log("no user logged in")
    var uiConfig = {
       signInSuccessUrl: 'https://joycurthblisso.github.io/GroupProject-1/setuppage.html',
       signInOptions: [
        // Specify providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
       ],
       // Terms of service url can be specified and will show up in the widget.
       tosUrl: '<your-tos-url>'
      };
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  //END AUTHENTICATION



  function goToHome() {
    // if (firebase.database().ref("/users/donations") === 2)
    location.href = "https://joycurthblisso.github.io/GroupProject-1/Donate.html"
    // else {
    // location.href = "https://joycurthblisso.github.io/GroupProject-1/Angels.html"
    // }
  };


});
