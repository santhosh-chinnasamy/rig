var app_firebase = {};
(function () {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyACdVp1O_BwDifqb3CPoQk0Rktfsp5vY0g",
            authDomain: "rigvehicle.firebaseapp.com",
            databaseURL: "https://rigvehicle.firebaseio.com",
            projectId: "rigvehicle",
            storageBucket: "rigvehicle.appspot.com",
            messagingSenderId: "432999432639"
        };
        firebase.initializeApp(config);
        app_firebase = firebase;
    }


)()