//JS FOR THE DONATE.HTML PAGE (SEND EMAIL TO DONOR)

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

}

  firebase.initializeApp(config);
  var database = firebase.database();
  	console.log(firebase);

	$("#submitBtn").on("click", function(event) {
		event.preventDefault();
	// var userEmail = firebase.auth().currentUser.email;
		var userEmail = "jojoenos@gmail.com";
		var donationType = $("#donateFood").val().trim();
		var numPeople = $("#menuNumber").val().trim();
		var donationValue = $("#value").val().trim();
		var pickUpTime = $("#pickUp").val().trim();
		console.log(donationType);
		console.log(numPeople);
		console.log(donationValue);
		console.log(pickUpTime);
		console.log("This is userEmail:", userEmail);

	// function donatorEmail(userEmail, donationType, numPeople, donationValue, pickUpTime) {
	function donatorEmail() {
		var queryURL = "https://api.mailgun.net/v3/";
		var hdrVal = "Basic " + btoa("api:key-ef72536d6301ae8ec42279773af8eaf9");
		var userEmail = "jojoenos@gmail.com";
		// var userEmail = firebase.auth().currentUser.email;
		var donationType = $("#donateFood").val().trim();
		console.log(donationType);
		// localstorage.setItem('userEmail', 'joann'); // sets it localstorage
		// var x = localstorage.getItem('hello'); // 'joann'`
		// console.log(x);
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

		donatorEmail(); //this order matters and matches donatorEmail function argument list.
		// donatorEmail(userEmail, donationType, numPeople, donationValue, pickUpTime);
	});

});
