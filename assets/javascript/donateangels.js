
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


          // future devs
  
  // $("#btnHappy").on("click", function() {
  // 	console.log("ROXANA THE HAPPY BUTTON WAS CLICKED!!");
  //   var angelEmail = firebase.auth().currentUser.email;
    // var donatorEmail = $("#userId").email;




  // 	var obj = {};
  //
  // 	emailArray = [];
  //
  	// $(".happy").each(function (index, element) { //going through each input field
    //
  	// 	if (element.checked) {
    //
  	// 		console.log(element);
  	// 		var key = $(this).attr("id");
  	// 		console.log(key); //this is the donation unique key
    //
  	// 		database.ref('donations/' + key).once('value').then(function(snapshot) {
    //
  	// 			var donorEmail = snapshot.val().email;
  	// 			console.log(donorEmail);
    //
  	// 			emailArray.push(donorEmail);
  	// 			console.log(emailArray);
    //
  	// 			return emailArray;
  	// 		});

  			// console.log("outside array" + email.Array);

      //
  		// 	obj['users/' + user + '/donations/' + $(this).attr("id")] = null;
  		// 	 $(this).parents("tr").remove(); //removes row from table
      //
      //
      //
  		// }

  				// console.log('outerspace' + emailArray);
  		// });// close button happy
  //
  // database.ref().update(obj);
  //

  // });

}); 
