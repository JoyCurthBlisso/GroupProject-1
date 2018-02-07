$(document).ready(function() {

function receiverEmail(restaurant, address, donationType, numOfItems, pickUpTime) {
	var queryURL = "https://api.mailgun.net/v3/";
	var hdrVal = "Basic " + btoa("api:key-ef72536d6301ae8ec42279773af8eaf9");
	var text = `<p>This is to confirm that you have agreed to pick up this donation today: </p> <p>Donation: </p>  <p>Pick up window and time:  </p> <p>Thank you so much for your KarmaFoodBank charity! </p> <pstyle="text-align:center;">— KarmaFoodBank </p>`

	$.ajax({
		url: "https://us-central1-empower-hope.cloudfunctions.net/api/mailgun-api/sandboxc502a7a2dae748469de9804c3742317f.mailgun.org/messages",
		method: "POST",
		headers: {"Authorization": hdrVal},
		data: {
			from: "jojoenos@gmail.com",
			to: "jojoenos@gmail.com",
			subject: "Hello from KarmaFoodBank",
			html: text	

			},

		}).then(function(response){
		   console.log(response);
		});
	}

	$(".submit").click(function() {
		// var toUser = (from Firebase);
		var restaurant = $("#donateFood").val().trim();
		var address = $("#menuNumber").val().trim();
		var donationType = $("#value").val().trim();
		var numOfItems = 
		var pickUpTime = $("#pickUp").val().trim;

		donatorEmail(restaurant, address, donationType, numOfItems, pickUpTime) //this order matters and matches donatorEmail function argument list.

	})

});

