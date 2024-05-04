var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyBsvVF69FEdDUT9sKRM6h1CNxPOH_hK0J8",
  authDomain: "kanyadetschool-2.firebaseapp.com",
  databaseURL: "https://kanyadetschool-2-default-rtdb.firebaseio.com",
  projectId: "kanyadetschool-2",
  storageBucket: "kanyadetschool-2.appspot.com",
  messagingSenderId: "123438564816",
  appId: "1:123438564816:web:d028d9db93f127207fa5d5",
  measurementId: "G-TZZV8DJCBC"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


