firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location.href="rigsurvillence.firebaseapp.com";

  } else {
    // No user is signed in.

  }
});

function login(){

  var userEmail = document.getElementById("email_id").value;
  var userPass = document.getElementById("password1").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
