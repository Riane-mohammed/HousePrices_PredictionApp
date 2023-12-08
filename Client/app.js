function getBathValue() {
    var Bathrooms = document.getElementsByName("Bathrooms");
    for (var i in Bathrooms) {
        if (Bathrooms[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1;
}

function getBalconyValue() {
    var balcony = document.getElementsByName("balcony");
    for (var i in balcony) {
        if (balcony[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1;
}

function getRoomsValue() {
    var room = document.getElementsByName("room");
    for (var i in room) {
        if (room[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1;
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getRoomsValue();
    var bathrooms = getBathValue();
    var balcony = getBalconyValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    // var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
    var url = "http://127.0.0.1:5000/predict_house_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        rooms: bhk,
        bath: bathrooms,
        balcony : balcony,
        location: location.value
    }, function (data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = data.estimated_price.toString() + " Lakh";
        console.log(status);
    });
}

function onPageLoad() {
  console.log( "document loaded" );
  // var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
  var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  $.get(url,function(data, status) {
      console.log("got response for get_location_names request");
      if(data) {
          var locations = data.locations;
          var uiLocations = document.getElementById("uiLocations");
          $('#uiLocations').empty();
          for(var i in locations) {
              var opt = new Option(locations[i]);
              $('#uiLocations').append(opt);
          }
      }
  });
}

window.onload = onPageLoad;