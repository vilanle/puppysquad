///////////////////////////  Set Up Initial Database  //////////////////////////
'use strict';

const initialState = {
  loggedIn: false,
  currentUser: {
    name: '',
    email: '',
    password: '',
    createdEvents: [],
    goingEvents: [],
    maybeEvents: []
  }
};
const initialAccounts = [
  {
    name: 'Demo Account',
    email: 'demo@gmail.com',
    password: 'demo',
    createdEvents: [],
    goingEvents: [],
    maybeEvents: []
  }
];
const initialEvents = [
  {
    title: 'Corgi Meetup',
    date: '09/16/16',
    time: '11:00AM',
    breed: 'corgi',
    dogSize: 'medium',
    location: 'Doyle Park, San Diego',
    price: 'free',
    description: 'Come meet awesome corgis!',
    image: './img/corgi.jpg',
    going: [],
    maybe: []
  }
];
const initialFilters = {
  breed: '',
  dogSize: '',
  date: '',
  price: '',
  distanceFrom: '',
  location: ''
};
const initialSearched = '';

localStorage.clear();

if (!localStorage.State) {
  localStorage.setItem('State', JSON.stringify(initialState));
} if (!localStorage.Accounts) {
  localStorage.setItem('Accounts', JSON.stringify(initialAccounts));
} if (!localStorage.Events) {
  localStorage.setItem('Events', JSON.stringify(initialEvents));
} if (!localStorage.Filters) {
  localStorage.setItem('Filters', JSON.stringify(initialFilters));
} if (!localStorage.Searched) {
  localStorage.setItem('Searched', JSON.stringify(initialSearched));
}
////////////////////////////////////////////////////////////////////////////////

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
