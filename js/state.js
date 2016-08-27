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
    maybeEvents: [],
    picture: './img/profilePic.png'
  }
};
const initialAccounts = [
  {
    name: 'Demo Account',
    email: 'demo@gmail.com',
    password: 'demo',
    createdEvents: [],
    goingEvents: [],
    maybeEvents: [],
    picture: './img/profilePic.png'
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
  },
  {
    title: 'Adoption Meetup',
    date: '09/17/16',
    time: '10:00AM',
    breed: '',
    dogSize: '',
    location: 'Humane Society, Gaines St San Diego',
    price: 'free',
    description: 'Come meet your new best friend!',
    image: './img/humane.jpg',
    going: [],
    maybe: []
  },
  {
    title: 'Puppy Pub Crawl',
    date: '09/18/16',
    time: '9:00PM',
    breed: '',
    dogSize: '',
    location: 'Pattys Pub, San Diego',
    price: 'free',
    description: 'Explore local bars with your pup.',
    image: './img/pub.jpg',
    going: [],
    maybe: []
  },
  {
    title: 'Petco Convention',
    date: '09/20/16',
    time: '11:00AM',
    breed: '',
    dogSize: '',
    location: 'Petco, La Jolla',
    price: '$',
    description: 'Get discounts on stocked items and attend a puppy and me game.',
    image: './img/petco.png',
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
const initialClickedEvent = {
    title: 'Puppy Pub Crawl',
    date: '09/18/16',
    time: '9:00PM',
    breed: '',
    dogSize: '',
    location: 'Pattys Pub, San Diego',
    price: 'free',
    description: 'Explore local bars with your pup.',
    image: './img/pub.jpg',
    going: [],
    maybe: []
};

// localStorage.clear();

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
} if (!localStorage.CurrentEvent) {
  localStorage.setItem('CurrentEvent', JSON.stringify(initialClickedEvent));
}
////////////////////////////////////////////////////////////////////////////////

let state = JSON.parse(localStorage.State);
let events = JSON.parse(localStorage.Events);
let accounts = JSON.parse(localStorage.Accounts);
let filters = JSON.parse(localStorage.Filters);
let searched = JSON.parse(localStorage.Searched);
let currentEvent = JSON.parse(localStorage.CurrentEvent);

if (state.loggedIn) {
  if(/index/.test(window.location.href)) {
    $('#profile-pic').attr('src', state.currentUser.picture);
  } else if(!(/index/.test(window.location.href))) {
    $('#profile-pic').attr('src', '.' + state.currentUser.picture);
  }
  $('#profile-name').text(state.currentUser.name);

  $('#loginnav').hide();
  $('#profilenav').show();
} else {
  $('#loginnav').show();
  $('#profilenav').hide();
}
