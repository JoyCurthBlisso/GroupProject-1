$(document).ready(function() {

function donatorEmail(userEmail, donationType, numPeople, donationValue, pickUpTime) {
	var queryURL = "https://api.mailgun.net/v3/";
	var hdrVal = "Basic " + btoa("api:key-ef72536d6301ae8ec42279773af8eaf9");
	var text = `<p>Thank you so much for your generous donation.</p> <p>Your benevolence is appreciated and you will reap the karmic rewards of that. </p>  <p>This is to confirm that you have offered this to the community today: </p> <p>You will receive an email if an organization in need will be able to benefit from this donation. </p> <p>Thank you so much for your KarmaFoodBank charity! </p> <pstyle="text-align:center;">— KarmaFoodBank </p>`
	// var userEmail = firebase.auth().currentUser.email;
	var userEmail = "jojoenos@gmail.com";
	// localstorage.setItem('userEmail', 'joann'); // sets it localstorage   
	// var x = localstorage.getItem('hello'); // 'joann'`
	// console.log(x);

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
		});

	}

	$(".submit").click(function() {
		// var toUser = (from Firebase);
		var userEmail = "jojoenos@gmail.com";
		var donationType = $("#donateFood").val().trim();
		var numPeople = $("#menuNumber").val().trim();
		var donationValue = $("#value").val().trim();
		var pickUpTime = $("#pickUp").val().trim();
		console.log(donationType);
		console.log(numPeople);
		console.log(donationValue);
		console.log(pickUpTime);
		console.log("This is userEmail:" userEmail);

		donatorEmail(userEmail, donationType, numPeople, donationValue, pickUpTime); //this order matters and matches donatorEmail function argument list.

	})


});

