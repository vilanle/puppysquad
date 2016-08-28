currentEvent = JSON.parse(localStorage.CurrentEvent);

$('#event-title').text(currentEvent.title);
$('#event-host').text('Hosted by: ' + currentEvent.hostedBy);
$('#event-date').text(currentEvent.date);
$('#event-time').text(currentEvent.time);
$('#event-location').text(currentEvent.location);
$('#event-price').text('$ ' + currentEvent.price);
$('#event-breed').text(currentEvent.breed);
$('#event-dogSize').text(currentEvent.dogSize);
$('#event-details').text(currentEvent.description);
$('#event-going').text('Attendence: ' + currentEvent.going.length + ' PuppyPals');
$('#event-maybe').text('Maybe: ' + currentEvent.maybe.length + ' PuppyPals');

for(let i = 0; i < currentEvent.going.length; i++) {
  let user = currentEvent.going[i];
  $( "#going-list" ).append(
    "<li>" +
     "<img src='" + user.picture + "' height='42' width='42' />" + user.name +
     "</li>"
  );
}

for(let i = 0; i < currentEvent.maybe.length; i++) {
  let user = currentEvent.maybe[i];
  $( "#maybe-list" ).append(
    "<li>" +
     "<img src='" + user.picture + "' height='42' width='42' />" + user.name +
     "</li>"
  );
}

for(let i = 0; i < currentEvent.comments.length; i++) {
  let comment = currentEvent.comments[i];
  $( "#event-comments" ).append(
    "<li>" +
      "<h5>"+ comment.name +"</h5>" +
      "<h6>"+ comment.time +"</h6>" +
      "<span>"+ comment.message +"</span>" +
    "</li>"
  );
}
