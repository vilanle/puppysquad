 function store(){
   var address1 = $("#first_a").val();
   var address2 = $("#second_a").val();
   var event_title = $("#event_title").val();;
   var breed = $("#breed").val();
   var dog_size = $("#dog_size").val();
   var price = $("#price").val();
   var event_description = $("#event_description").val();
   let event_date = (parseDate($("#event_date").val()));
   var event_time = $("#event_time").val();

   let state = JSON.parse(localStorage.State);
   let accounts = JSON.parse(localStorage.Accounts);
   let events = JSON.parse(localStorage.Events);

   let newEvent = {
     title: event_title,
     date: event_date.toDateString(),
     dateString: event_date.valueOf(),
     time: event_time,
     breed: breed,
     dogSize: dog_size,
     location: address1 + ' ' + address2,
     price: price,
     description: event_description,
     image: './img/Corgi2.jpg',
     going: [],
     maybe: [],
     hostedBy: state.currentUser.name,
     comments: []
   };

   events.push(newEvent);
   state.currentUser.createdEvents.push(newEvent);
   localStorage.setItem('State', JSON.stringify(state));
   localStorage.setItem('Events', JSON.stringify(events));
   localStorage.setItem('CurrentEvent', JSON.stringify(newEvent));


   for(let i = 0; i < accounts.length; i++) {
     let account = accounts[i];
     if(account.email === state.currentUser.email) {
       accounts[i].createdEvents.push(newEvent);
       localStorage.setItem('Accounts', JSON.stringify(accounts));
       location.replace('../views/EventViewer.html');
       return;
     }
   }
}

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}
