
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


      var userEmail = "jojoenos@gmail.com";
    var donationType = $("#donateFood").val().trim();
    var numPeople = $("#menuNumber").val().trim();
    var donationValue = $("#value").val().trim();
    var pickUpTime = $("#pickUp").val().trim();

    function donatorEmail() {
      var queryURL = "https://api.mailgun.net/v3/";
      var hdrVal = "Basic " + btoa("api:key-ef72536d6301ae8ec42279773af8eaf9");
      var userEmail = "jojoenos@gmail.com";
    
      var donationType = $("#donateFood").val().trim();
    
    
      var text = `<p>Thank you so much for your generous donation.</p> <p>Your benevolence is appreciated and you will reap the karmic rewards of that. </p>  <p>This is to confirm that you have offered this to the community today: <ul> </p> <p> <li> Donation: `+ donationType +` </li> </p> <p> <li> Approximate value:  `+ donationValue + `</li> </p> <li> For number of people: `+ numPeople +` </li> <p> <li> Pick up time: `+ pickUpTime +` </li> </ul> </p>  <p>You will receive an email if an organization in need will be able to benefit from this donation. </p> <p>Thank you again for your KarmaFoodBank charity! </p> <p style='text-align:center'>— KarmaFoodBank </p>`

        $.ajax({
          url: "https://us-central1-empower-hope.cloudfunctions.net/api/mailgun-api/sandboxc502a7a2dae748469de9804c3742317f.mailgun.org/messages",
          method: "POST",
          headers: {"Authorization": hdrVal},
          data: {
            from: "jojoenos@gmail.com",
            to: userEmail,
            subject: "Hello from KarmaFoodBank",
            html: text

            },

          }).then(function(response){
             console.log(response);
             console.log(userEmail);
          });

      }

      donatorEmail(); 

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

