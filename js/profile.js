state = JSON.parse(localStorage.State);
let currentUser = state.currentUser;

$('#profile-page-name').text(currentUser.name);
$('#profile-page-email').text(currentUser.email);

$('#profile-page-dogs').append(
  "<button type='button' class='btn' id='add' style='color:black; float:left; width:120px; height:120px; border:dashed'>Click To Add</button>"
);

for(let i = 0; i < currentUser.myDogs.length; i++) {
  let dog = currentUser.myDogs[i];
  $('#profile-page-dogs').append(
    "<img src='"+ dog.picture +"' alt='Dog Picture' style='float:left; width:120px; height:120px; border:solid'>"
  );
  $('#profile-page-dog-names').append(
    "<li style='margin-right: 70px'>"+ dog.name +"</li>"
  );
}

for (let i = 0; i < currentUser.goingEvents.length; i++) {
  let event = currentUser.goingEvents[i];
  let nocasespace = event.title.replace(/\s+/g, '').toLowerCase();

  $( "#eventschild" ).append(
      "<div class='event' id='" + JSON.stringify(event) + "'>" +
        "<img id='" + JSON.stringify(event) + "' src='"+ "." + event.image +"' class='event-image'></img>" +
        "<div id='"+ JSON.stringify(event) +"'class='event-title'>"+ event.title +"</div>" +
        "<div id='"+ JSON.stringify(event) +"'class='event-time'>"+ event.date +
        "<br><span>"+ event.time +"</span></div>" +
      "</div>"
  );
}

for (let i = 0; i < currentUser.createdEvents.length; i++) {
  let event = currentUser.createdEvents[i];
  let nocasespace = event.title.replace(/\s+/g, '').toLowerCase();

  $( "#created-events" ).append(
      "<div class='event' id='" + JSON.stringify(event) + "'>" +
        "<img id='" + JSON.stringify(event) + "' src='"+ "." + event.image +"' class='event-image'></img>" +
        "<div id='"+ JSON.stringify(event) +"'class='event-title'>"+ event.title +"</div>" +
        "<div id='"+ JSON.stringify(event) +"'class='event-time'>"+ event.date +
        "<br><span>"+ event.time +"</span></div>" +
      "</div>"
  );
}

$( ".event" ).click(function( event ) {
  console.log(event);
  localStorage.setItem('CurrentEvent', event.target.id);
  console.log(event.target.id);
  location.replace('../views/EventViewer.html');
});
