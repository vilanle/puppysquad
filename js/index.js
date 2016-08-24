function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(32.715738,-117.1610838),
    zoom: 13
  });
  var input = /** @type {!HTMLInputElement} */(
      document.getElementById('pac-input'));

  var types = document.getElementById('type-selector');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });
}

// Set up initial

// initial events
const initialEvents = [

];

// list of objects
if (!localStorage.Accounts) {
  localStorage.setItem('Accounts',[]);
}

// list of objects
if (!localStorage.Events) {
  localStorage.setItem('Events',[]);
}

if (localStorage.LoggedIn) {

}

const eventTitle = {
  'corgimeetup': 'Corgi Meetup',
  'puppypubcrawl': 'Puppy Pub Crawl',
  'adoptionmeetup': 'Adoption Meetup',
  'petcoconvention': 'Petco Convention'
}

function search() {
  let input = document.getElementById("searchevents").value;
  let nocasespace = input.replace(/\s+/g, '').toLowerCase();
  let found =document.getElementById(nocasespace);

  if(found) {
    $('#eventschild').hide();

    localStorage.setItem('lastsearch','#'+nocasespace);

    $( "#events" ).append(
      "<div class='col-lg-12' id='eventschild'>" +
        "<a href='#'><div class='event' id='" + nocasespace + "'>" +
          "<img src='img/puppy.jpg' class='event-image'></img>" +
          "<div class='event-title'>"+ eventTitle[nocasespace] +"</div>" +
          "<div class='event-time'>Time</div>" +
        "</div></a></div>"
    );
  }

}
