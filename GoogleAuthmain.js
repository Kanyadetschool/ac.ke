var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            alert('success');
            window.location.replace("GoogleAuthlogin.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          prompt("redirect");
          window.location.replace("GoogleAuthlogin.html");
        }
      });
}
    
init();

mainApp.logout = logtout;
})();