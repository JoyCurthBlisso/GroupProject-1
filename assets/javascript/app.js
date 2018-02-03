$(document).ready(function() {
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

    var currentUid = null;

    firebase.auth().onAuthStateChanged(function(user) {
     // onAuthStateChanged listener triggers every time the user ID token changes.
     // This could happen when a new user signs in or signs out.
     // It could also happen when the current user ID token expires and is refreshed.
     if (user && user.uid != currentUid) {
      // Update the UI when a new user signs in.
      // Otherwise ignore if this is a token refresh.
      // Update the current user UID.

      currentUid = user.uid;
      document.body.innerHTML = '<h1> Congrats ' + user.displayName + ', you are done! </h1> <h2> Need to verify your email address or reset your password? Firebase can handle all of that for you using the email you provided: ' + user.email + '. <h/2>';

     } else {
      // Sign out operation. Reset the current user UID.
      currentUid = null;
      console.log("no user signed in");

      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: 'https://clarkwmcd.github.io/firebaseProject/setup.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'https://clarkwmcd.github.io/'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
      }

    });


      // firebase.database().ref().push("user address")

      // $("#firebaseui-auth-container").on("click", writeUserData);
      //
      // function writeUserData(userId, name, email, imageUrl, state) {
      //   firebase.database().ref('users/' + userId).set({
      //     username: name,
      //     email: email,
      //     profile_picture : imageUrl,
      //     state: state
      //   });
      // }

      // var user = firebase.auth().currentUser;
      // var name, email, photoUrl, uid, emailVerified;
      //
      // if (user != null) {
      //   name = user.displayName;
      //   email = user.email;
      //   photoUrl = user.photoURL;
      //   emailVerified = user.emailVerified;
      //   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use this value to authenticate with your backend server, if you have one. Use User.getToken() instead.
      // }

  });
