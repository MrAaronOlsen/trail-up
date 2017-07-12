var map;

// window.onload = function() {
//   var locations = document.getElementById("data").textContent;
//   var display = document.getElementById("display-data");
//   var array_locations = locations.split(",")
//
//   display.innerHTML = array_locations.length
//
//   function displayData() {
//     for(i = 0; i < array_locations.length; i ++) {
//       display.innerHTML = array_locations[i]
//     }
//   }
// };

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 39.742043, lng: -104.991531 },
    mapTypeId: 'terrain',
    zoom: 8
  } );

  var markers = locs.map( function(locs, i) {
    return new google.maps.Marker({
      position: locs,
      label: 'A'
    });
  });

  var markerCluster = new MarkerClusterer(map, markers,
    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

  // var script = document.createElement('script');
  //
  // script.src = 'https://api.outerspatial.com/v0/trailheads.geojson?per_page=10&outputFormat=text/javascript';
  // document.getElementsByTagName('head')[0].appendChild(script);

  google.maps.event.addListener(map, 'click', function(event) {
    marker = new google.maps.Marker({
    position: event.latLng,
    map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  });
}



// function eqfeed_callback(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1], coords[0]);
//     var marker = new google.maps.Marker({ position: latLng, map: map });
//   }
// }

var locs = [
  { lat: 40.119043, lng: -104.915531 },
  { lat: 40.128043, lng: -104.926531 },
  { lat: 40.137043, lng: -104.937531 },
  { lat: 40.146043, lng: -104.948531 },
  { lat: 40.155043, lng: -104.959531 },
  { lat: 40.164043, lng: -104.968531 },
  { lat: 40.173043, lng: -104.977531 },
  { lat: 40.182043, lng: -104.986531 },
  { lat: 40.191043, lng: -104.995531 },
  { lat: 40.111043, lng: -104.994531 },
  { lat: 40.122043, lng: -104.983531 },
  { lat: 40.133043, lng: -104.972531 },
  { lat: 40.144043, lng: -104.961531 },
  { lat: 40.155043, lng: -104.952531 },
  { lat: 40.166043, lng: -104.943531 },
  { lat: 40.177043, lng: -104.934531 },
  { lat: 40.188043, lng: -104.925531 },
  { lat: 40.199043, lng: -104.916531 },
  { lat: 40.119043, lng: -104.927531 },
  { lat: 40.128043, lng: -104.938531 },
  { lat: 40.137043, lng: -104.949531 },
  { lat: 40.146043, lng: -104.954531 },
  { lat: 40.155043, lng: -104.963531 },
  { lat: 40.164043, lng: -104.972531 } ];


