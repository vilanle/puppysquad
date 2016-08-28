for (let i = 0; i < events.length; i++) {
  let event = events[i];
  let nocasespace = event.title.replace(/\s+/g, '').toLowerCase();

  $( "#eventschild" ).append(
      "<div class='event " + event.breed + ' ' + event.dogSize + ' ' + event.dateString + ' ' + event.price + "' id='" + JSON.stringify(event) + "'>" +
        "<img id='" + JSON.stringify(event) + "' src='"+ event.image +"' class='event-image'></img>" +
        "<div id='"+ JSON.stringify(event) +"'class='event-title'>"+ event.title +"</div>" +
        "<div id='"+ JSON.stringify(event) +"'class='event-time'>"+ event.date +
        "<br><span>"+ event.time +"</span></div>" +
      "</div>"
  );
}

$( ".event" ).click(function( event ) {
  localStorage.setItem('CurrentEvent', event.target.id);
  location.replace('./views/EventViewer.html');
});



//  Possible Search Filtering Implementation  //

// const eventTitle = {
//   'corgimeetup': 'Corgi Meetup',
//   'puppypubcrawl': 'Puppy Pub Crawl',
//   'adoptionmeetup': 'Adoption Meetup',
//   'petcoconvention': 'Petco Convention'
// }
//
// function search() {
//   let input = document.getElementById("searchevents").value;
//   let nocasespace = input.replace(/\s+/g, '').toLowerCase();
//   let found =document.getElementById(nocasespace);
//
//   if(found) {
//     $('#eventschild').hide();
//
//     localStorage.setItem('lastsearch','#'+nocasespace);
//
//     $( "#events" ).append(
//       "<div class='col-lg-12' id='eventschild'>" +
//         "<a href='#'><div class='event' id='" + nocasespace + "'>" +
//           "<img src='img/puppy.jpg' class='event-image'></img>" +
//           "<div class='event-title'>"+ eventTitle[nocasespace] +"</div>" +
//           "<div class='event-time'>Time</div>" +
//         "</div></a></div>"
//     );
//   }
//
// }
