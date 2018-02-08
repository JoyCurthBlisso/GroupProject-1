$(document).ready(function() {

	$("#donation").on("click",function(event) {
		if ($("#filled-in-box").is(":checked")) {
			console.log("checked");

			// function receiverEmail(restaurant, address, donationType, numOfItems, pickUpTime) {
			function receiverEmail() {
				var queryURL = "https://api.mailgun.net/v3/";
				var hdrVal = "Basic " + btoa("api:key-ef72536d6301ae8ec42279773af8eaf9");
				var donationType = $("#donateFood").text();
				var pickUpTime = $("#pickUpTime").text();
				var numOfItems = $("#number").text();
				var text = `<p>This is to confirm that you have agreed to pick up this donation today: </p> <ul> <p> <li> Donation: `+ donationType +` </li> </p> <p> <li> Number of items: `+ numOfItems +` </li> </p> <p> <li> Pick up time: `+ pickUpTime +` </li> </p> <p>Thank you so much for your KarmaFoodBank charity! </p> <p style="text-align:center;">— KarmaFoodBank </p>`

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

			// receiverEmail(restaurant, address, donationType, numOfItems, pickUpTime) //this order matters and matches donatorEmail function argument list.
			receiverEmail(); //this order matters and matches donatorEmail function argument list.

			function donatorAcceptedEmail() {
				var queryURL = "https://api.mailgun.net/v3/";
				var hdrVal = "Basic " + btoa("api:key-ef72536d6301ae8ec42279773af8eaf9");
				var donationType = $("#donateFood").text();
				var pickUpTime = $("#pickUpTime").text();
				var numOfItems = $("#number").text();
				var text = `<p>This is to confirm that your donation has been accepted. </p> <ul> <p> <li> Donation: `+ donationType +` </li> </p> <p> <li> Number of items: `+ numOfItems +` </li> </p><p> <li> Pickup time:  `+ pickUpTime +` </li> </p> <p>Thank you again for your generosity! </p> <p style="text-align:center;"> — KarmaFoodBank </p>`

				console.log(donationType);
	
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

					});

				}

			donatorAcceptedEmail() 

		} else {
			var checkCheckBox = "Please confirm you've checked your item." // logic to display error message on form
			alert("Please confirm you've checked your item.");
		};

	});

});






