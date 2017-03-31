var launches;
var lat = [];
var long = [];
var country = [];
var green_past = document.querySelector('.usa');
var red_past = document.querySelector('.urss');
var reset = document.querySelector('.reset');
var map;

function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'tmp/launches.JSON', false); 
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    launches = JSON.parse(response);
    //    document.querySelector('body').innerHTML = launches.launches[0].isostart.slice(0,4);
  });
}


function initMap() {
  for(var i = 0; i < launches.launches.length;i++){
    var j = 0;
    var prez = false;
    while(j < lat.length && prez == false){
      if(launches.launches[i].location.pads[0].latitude == lat[j])
        prez = true;
      j++
    }
    if(prez == false){
      lat.push(launches.launches[i].location.pads[0].latitude);
      long.push(launches.launches[i].location.pads[0].longitude);
      country.push(launches.launches[i].rocket.agencies[0].countryCode);
    }
  }

  //Style map

  var styles = [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    }
  ]
  var crd = {lat: 40, lng: 10};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: crd,
    mapTypeId: google.maps.MapTypeId.MAP,
    disableDefaultUI: true
  });
  
  map.setOptions({styles: styles});

  var iconGreen = {
    url: "assets/icons/green.png", // url
    scaledSize: new google.maps.Size(10, 10), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  var iconRed = {
    url: "assets/icons/red.png", // url
    scaledSize: new google.maps.Size(10, 10), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  for(var i = 0; i < lat.length; i++){
    if(country[i] == 'RUS'){
      map[i] = new google.maps.Marker({
        position: {lat:lat[i], lng:long[i]},
        map: map,
        icon: iconRed,
      });
    }
    else{
      map[i] = new google.maps.Marker({
        position: {lat:lat[i], lng:long[i]},
        map: map,
        icon: iconGreen,
      });
    }
  }
}

red_past.addEventListener('click', () => {
  var point = new google.maps.LatLng(lat[0], long[0]);
  map.setZoom(11);
  map.setCenter(point);
});

green_past.addEventListener('click', () => {
  var point = new google.maps.LatLng(lat[3], long[3]);
  map.setZoom(11);
  map.setCenter(point);
});

reset.addEventListener('click', () => {
  var point = new google.maps.LatLng(40,10);
  map.setZoom(2);
  map.setCenter(point);
});

init();