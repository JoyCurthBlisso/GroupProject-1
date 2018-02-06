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
        var restuarantList = $('<div>' + item.name + ' Location: ' + item.location.address1 + ' ' + item.location.city + " " + item.location.state + " " + item.location.zip_code + '<button type="button" class="selectName">submit</button></div>');
        $("#yelpInfo").append(restuarantList);
      });


    });


  };
  $(document).on("click", ".selectName", function(event) {
    // location.href="Angels.html"
    // var selectedDonor = $(this);
    // console.log(selectedDonor.data('name'));

    event.preventDefault();
    // var user = firebase.auth().currentUser.uid;
    var user = "clark";

    var profile = {
      user: user,
      organization: yelpObject.business[0].name,
      // organizationAddress: yelpObject.location.address1
    };
    console.log(profile);

    firebase.database().ref().push(profile);

  });
});
