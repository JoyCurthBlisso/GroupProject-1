$(document).ready(function() {
  var yelpObject;

  $("#yelp").on("click", function() {
    yelpInfo();
  });

  function yelpInfo() {
    //pass in name and zip code
    var restaurant = $("#restaurant").val();
    var zipCode = $("#zipCode").val();
    var queryURLSearchYelp = 'https://api.yelp.com/v3/businesses/search';
    var apiKeyYelp = 'Bearer zTJpqez7KoUP_Bzx4wKMATc6I8FFHexDEaczh9IZCqtlhEL1_TT4bzfVK-j5o0Ur01YoaXkzhmxMtv3uMmwm587ofMKFUCxEfF0iGPlso_fvkObv21lMj9m1Iu5xWnYx'


    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/" + queryURLSearchYelp,
      "crossDomain": true,
      method: "GET",
      data: {
        location: zipCode,
                  term: restaurant,
                  limit: 5
      },
      headers: {
        "Authorization": apiKeyYelp
      }

    }).then(function(response) {
      yelpObject = response;

      console.log(response);
      $("#yelpInfo").html("");
      $.each(response.businesses, function(index, item) {
        // var img = $('<div>Name: ' + item.name + '</div><br/> <img src="' + item.image_url  + '" />');
        // $("#yelpInfo").append(img);
        // var img = $('<div>Name: ' + item.name);
        // call

        var organizationYelpAddress = item.location.address1 + ", " + item.location.city + ", " + item.location.city + " " + item.location.state + " " + item.location.zip_code;
        var organizationYelpList = $('<div>' + item.name + ' Location: ' + item.location.address1 + ' ' + item.location.city + " " + item.location.state + " " + item.location.zip_code + '<button type="button" class="selectName" data-name="'+ item.name + '" data-address="' + organizationYelpAddress + '"">submit</button></div>');
        $("#yelpInfo").append(organizationYelpList);
      });


    });


  };
  $(document).on("click", ".selectName", function(event) {

    var selectedDonor = $(this);
    console.log(selectedDonor.data('name'));

    event.preventDefault();
    // var user = firebase.auth().currentUser.uid;
    var user = "TESTFEB5";

    var profile = {
      user: user,
      organization: selectedDonor.data('name'),
      organizationAddress: selectedDonor.data('address')
    };
    console.log(profile);

    firebase.database().ref("/users").push(profile);

    // location.href="Angels.html"

  });
});
