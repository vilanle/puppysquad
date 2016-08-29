 function store(){
   var address1 = $("#first_a").val();
   var address2 = $("#second_a").val();
   var event_title = $("#event_title").val();;
   var breed = $("#breed").val();
   var dog_size = $("#dog_size").val();
   var price = $("#price").val();
   var event_description = $("#event_description").val();
   let event_date = (parseDate($("#event_date").val()));

   let state = JSON.parse(localStorage.State);
   let accounts = JSON.parse(localStorage.Accounts);

   let newEvent = {
     title: event_title,
     date: event_date.toLocaleString('en-US'),
     dateString: event_date.valueOf(),
     time: '',
     breed: '',
     dogSize: '',
     location: 'Pattys Pub, San Diego',
     price: 'free',
     description: 'Explore local bars with your pup.',
     image: './img/pub.jpg',
     going: [],
     maybe: [],
     hostedBy: 'Pattys Pub',
     comments: []
   };



}

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}
