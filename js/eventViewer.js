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

$( "#going-button" ).click(function( event ) {

  let currentEvent = JSON.parse(localStorage.CurrentEvent);
  let accounts = JSON.parse(localStorage.Accounts);
  let state = JSON.parse(localStorage.State);
  let events = JSON.parse(localStorage.Events);

  if(!state.loggedIn) {
    alert('You must be logged in to attend!');
    return;
  }

  for(let i = 0; i < state.currentUser.goingEvents.length; i++) {
    let event = state.currentUser.goingEvents[i];
    if(event.title === currentEvent.title) {
      alert('Already attending event!');
      return;
    }
  }

  let goingUser = {
    name: state.currentUser.name,
    picture: '.' + state.currentUser.picture
  };

  currentEvent.going.push(goingUser)
  localStorage.setItem('CurrentEvent', JSON.stringify(currentEvent));

  for(let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if(account.email === state.currentUser.email) {
      accounts[i].goingEvents.push(currentEvent);
      localStorage.setItem('Accounts', JSON.stringify(accounts));
      break;
    }
  }

  state.currentUser.goingEvents.push(currentEvent);
  localStorage.setItem('State', JSON.stringify(state));

  events.push(currentEvent);
  localStorage.setItem('Events', JSON.stringify(events));

  location.reload();
});

$( "#maybe-button" ).click(function( event ) {
  let currentEvent = JSON.parse(localStorage.CurrentEvent);
  let accounts = JSON.parse(localStorage.Accounts);
  let state = JSON.parse(localStorage.State);
  let events = JSON.parse(localStorage.Events);

  if(!state.loggedIn) {
    alert('You must be logged in to attend!');
    return;
  }

  for(let i = 0; i < state.currentUser.maybeEvents.length; i++) {
    let event = state.currentUser.maybeEvents[i];
    if(event.title === currentEvent.title) {
      alert('Already maybe attending the event!');
      return;
    }
  }

  let goingUser = {
    name: state.currentUser.name,
    picture: '.' + state.currentUser.picture
  };

  currentEvent.maybe.push(goingUser)
  localStorage.setItem('CurrentEvent', JSON.stringify(currentEvent));

  for(let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if(account.email === state.currentUser.email) {
      accounts[i].maybeEvents.push(currentEvent);
      localStorage.setItem('Accounts', JSON.stringify(accounts));
      break;
    }
  }

  state.currentUser.maybeEvents.push(currentEvent);
  localStorage.setItem('State', JSON.stringify(state));

  for(let i = 0; i < events.length; i++) {
    let event = events[i];
    if(event.title === currentEvent.title) {
      events[i] = currentEvent;
      localStorage.setItem('Events', JSON.stringify(events));
      break;
    }
  }

  location.reload();
});
