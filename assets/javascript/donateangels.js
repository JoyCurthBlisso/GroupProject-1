
$(document).ready(function() {


  $('.parallax').parallax();



  var config = {
    apiKey: "AIzaSyBR4mFvJiYUIQDIVoDzKCWZyxyeJ-C5rCw",
    authDomain: "fir-project-ca268.firebaseapp.com",
    databaseURL: "https://fir-project-ca268.firebaseio.com",
    projectId: "fir-project-ca268",
    storageBucket: "",
    messagingSenderId: "60944439745"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  var donationTable = $("#donationTable");
	var user = "tkHYANYecOWFQ8JnDmQZsfzVBns1";
	var email = "clarkwmcd@gmail.com";


  $("#submitBtn").on("click", function(event) {

    event.preventDefault();

    if (($("#donateFood").val() == "") || ($("#menuNumber").val() == "") || ($("#value").val() == "") || ($("#pickUp").val() == "")) {

      $('#modal1').modal(); 
      $('#modal1').modal('open'); 

    } else {

      var donateFood = $("#donateFood").val().trim();
      var menuNumber = $("#menuNumber").val().trim();
      var value = $("#value").val().trim();
      var pickUp = $("#pickUp").val().trim();

      var temp = {
        donateFood: donateFood,
        menuNumber: menuNumber,
        value: value,
        pickUp: pickUp
      };


      $("#donateFood").val("");
      $("#menuNumber").val("");
      $("#value").val("");
      $("#pickUp").val("");

    }


		database.ref("/users/" + user + "/profile").update(temp);
   

  }); 

	database.ref("users/" + user).on("child_added", function(childSnapshot) {
  
    var restaurant = childSnapshot.val().restaurant;
		var restaurantAddress = childSnapshot.val().restaurantAddress;
		var donateFood = childSnapshot.val().donateFood;
		var menuNumber = childSnapshot.val().menuNumber;
		var value = childSnapshot.val().value;
		var pickUp = childSnapshot.val().pickUp;
    var userId = childSnapshot.val().user;

		var donationTable = $("#donationTable");
		donationTable.append("<tr><th>"+ restaurant +"</th><th>" + restaurantAddress +"</th><th>"+ donateFood +"</th><th>"+ menuNumber + "</th><th>"+ pickUp + "</th><th><p><input type='checkbox' class='filled-in happy' id='"+ userId +"'/><label for='"+ userId + "'></label></p></tr>");

	}, function(errorObject) {
		console.log("The read failed: " + errorObject.code);
	});



}); 
