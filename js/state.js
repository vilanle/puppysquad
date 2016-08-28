///////////////////////////  Set Up Initial Database  //////////////////////////
'use strict';

const initialState = {
  loggedIn: false,
  currentUser: {
    name: 'Demo Account',
    email: 'demo@gmail.com',
    password: 'demo',
    createdEvents: [],
    goingEvents: [
      {
        title: 'Corgi Meetup',
        date: new Date("September 19, 2016 11:13:00").toLocaleString('en-US'),
        dateString: new Date("September 19, 2016 11:13:00").valueOf(),
        time: '11:00AM',
        breed: 'corgi',
        dogSize: 'medium',
        location: 'Doyle Park, San Diego',
        price: 'free',
        description: 'Come meet awesome corgis!',
        image: './img/corgi.jpg',
        going: [
          {
            name: 'Tina',
            picture: "../img/Tina.png"
          },
          {
            name: 'Jimmy Jr.',
            picture: "../img/JimmyJr.png"
          },
          {
            name: 'Bob Belcher',
            picture: "../img/bob.jpg"
          }
        ],
        maybe: [
          {
            name: 'Linda Belcher',
            picture: "../img/Linda.jpeg"
          }
        ],
        hostedBy: 'Corgi Nation',
        comments: [
          {
            name: 'Bob Belcher',
            time: '09/03/16',
            message: 'This event looks awesome!'
          },
          {
            name: 'Tina',
            time: '09/03/16',
            message: 'I have ten corgis!'
          }
        ]
      }
    ],
    maybeEvents: [],
    picture: './img/profilePic.png',
    myDogs: [
      {
        name: 'Lucky',
        picture: "../img/puppy.jpg"
      },
      {
        name: 'Journey',
        picture: "../img/therapy.jpg"
      }
    ]
  }
};
const initialAccounts = [
  {
    name: 'Demo Account',
    email: 'demo@gmail.com',
    password: 'demo',
    createdEvents: [],
    goingEvents: [
      {
        title: 'Corgi Meetup',
        date: new Date("September 19, 2016 11:13:00").toLocaleString('en-US'),
        dateString: new Date("September 19, 2016 11:13:00").valueOf(),
        time: '11:00AM',
        breed: 'corgi',
        dogSize: 'medium',
        location: 'Doyle Park, San Diego',
        price: 'free',
        description: 'Come meet awesome corgis!',
        image: './img/corgi.jpg',
        going: [
          {
            name: 'Tina',
            picture: "../img/Tina.png"
          },
          {
            name: 'Jimmy Jr.',
            picture: "../img/JimmyJr.png"
          },
          {
            name: 'Bob Belcher',
            picture: "../img/bob.jpg"
          }
        ],
        maybe: [
          {
            name: 'Linda Belcher',
            picture: "../img/Linda.jpeg"
          }
        ],
        hostedBy: 'Corgi Nation',
        comments: [
          {
            name: 'Bob Belcher',
            time: '09/03/16',
            message: 'This event looks awesome!'
          },
          {
            name: 'Tina',
            time: '09/03/16',
            message: 'I have ten corgis!'
          }
        ]
      }
    ],
    maybeEvents: [],
    picture: './img/profilePic.png',
    myDogs: [
      {
        name: 'Lucky',
        picture: "../img/puppy.jpg"
      },
      {
        name: 'Journey',
        picture: "../img/therapy.jpg"
      }
    ]
  }
];
const initialEvents = [
  {
    title: 'Corgi Meetup',
    date: new Date("September 19, 2016 11:13:00").toLocaleString('en-US'),
    dateString: new Date("September 19, 2016 11:13:00").valueOf(),
    time: '11:00AM',
    breed: 'corgi',
    dogSize: 'medium',
    location: 'Doyle Park, San Diego',
    price: 'free',
    description: 'Come meet awesome corgis!',
    image: './img/corgi.jpg',
    going: [
      {
        name: 'Tina',
        picture: "../img/Tina.png"
      },
      {
        name: 'Jimmy Jr.',
        picture: "../img/JimmyJr.png"
      },
      {
        name: 'Bob Belcher',
        picture: "../img/bob.jpg"
      }
    ],
    maybe: [
      {
        name: 'Linda Belcher',
        picture: "../img/Linda.jpeg"
      }
    ],
    hostedBy: 'Corgi Nation',
    comments: [
      {
        name: 'Bob Belcher',
        time: '09/03/16',
        message: 'This event looks awesome!'
      },
      {
        name: 'Tina',
        time: '09/03/16',
        message: 'I have ten corgis!'
      }
    ]
  },
  {
    title: 'Adoption Meetup',
    date: new Date("September 20, 2016 11:13:00").toLocaleString('en-US'),
    dateString: new Date("September 20, 2016 11:13:00").valueOf(),
    time: '10:00AM',
    breed: '',
    dogSize: '',
    location: 'Humane Society, Gaines St San Diego',
    price: 'free',
    description: 'Come meet your new best friend!',
    image: './img/humane.jpg',
    going: [
      {
        name: 'Tina',
        picture: "../img/Tina.png"
      },
      {
        name: 'Jimmy Jr.',
        picture: "../img/JimmyJr.png"
      },
      {
        name: 'Bob Belcher',
        picture: "../img/bob.jpg"
      }
    ],
    maybe: [
      {
        name: 'Linda Belcher',
        picture: "../img/Linda.jpeg"
      }
    ],
    hostedBy: 'Humane Society of San Diego',
    comments: [
      {
        name: 'Bob Belcher',
        time: '09/03/16',
        message: 'This event looks awesome!'
      },
      {
        name: 'Tina',
        time: '09/03/16',
        message: 'I have ten corgis!'
      }
    ]
  },
  {
    title: 'Puppy Pub Crawl',
    date: new Date("September 21, 2016 11:13:00").toLocaleString('en-US'),
    dateString: new Date("September 21, 2016 11:13:00").valueOf(),
    time: '9:00PM',
    breed: '',
    dogSize: '',
    location: 'Pattys Pub, San Diego',
    price: 'free',
    description: 'Explore local bars with your pup.',
    image: './img/pub.jpg',
    going: [
      {
        name: 'Tina',
        picture: "../img/Tina.png"
      },
      {
        name: 'Jimmy Jr.',
        picture: "../img/JimmyJr.png"
      },
      {
        name: 'Bob Belcher',
        picture: "../img/bob.jpg"
      }
    ],
    maybe: [
      {
        name: 'Linda Belcher',
        picture: "../img/Linda.jpeg"
      }
    ],
    hostedBy: 'Pattys Pub',
    comments: [
      {
        name: 'Bob Belcher',
        time: '09/03/16',
        message: 'This event looks awesome!'
      },
      {
        name: 'Tina',
        time: '09/03/16',
        message: 'I have ten corgis!'
      }
    ]
  },
  {
    title: 'Petco Convention',
    date: new Date("September 22, 2016 11:13:00").toLocaleString('en-US'),
    dateString: new Date("September 22, 2016 11:13:00").valueOf(),
    time: '11:00AM',
    breed: '',
    dogSize: '',
    location: 'Petco, La Jolla',
    price: '10',
    description: 'Get discounts on stocked items and attend a puppy and me game.',
    image: './img/petco.png',
    going: [
      {
        name: 'Tina',
        picture: "../img/Tina.png"
      },
      {
        name: 'Jimmy Jr.',
        picture: "../img/JimmyJr.png"
      },
      {
        name: 'Bob Belcher',
        picture: "../img/bob.jpg"
      }
    ],
    maybe: [
      {
        name: 'Linda Belcher',
        picture: "../img/Linda.jpeg"
      }
    ],
    hostedBy: 'Petco (Verified)',
    comments: [
      {
        name: 'Bob Belcher',
        time: '09/03/16',
        message: 'This event looks awesome!'
      },
      {
        name: 'Tina',
        time: '09/03/16',
        message: 'I have ten corgis!'
      }
    ]
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
  date: new Date("September 21, 2016 11:13:00").toLocaleString('en-US'),
  dateString: new Date("September 21, 2016 11:13:00").valueOf(),
  time: '9:00PM',
  breed: '',
  dogSize: '',
  location: 'Pattys Pub, San Diego',
  price: 'free',
  description: 'Explore local bars with your pup.',
  image: './img/pub.jpg',
  going: [
    {
      name: 'Tina',
      picture: "../img/Tina.png"
    },
    {
      name: 'Jimmy Jr.',
      picture: "../img/JimmyJr.png"
    },
    {
      name: 'Bob Belcher',
      picture: "../img/bob.jpg"
    }
  ],
  maybe: [
    {
      name: 'Linda Belcher',
      picture: "../img/Linda.jpeg"
    }
  ],
  hostedBy: 'Pattys Pub',
  comments: [
    {
      name: 'Bob Belcher',
      time: '09/03/16',
      message: 'This event looks awesome!'
    },
    {
      name: 'Tina',
      time: '09/03/16',
      message: 'I have ten corgis!'
    }
  ]
};
//
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
    if (state.currentUser.picture)
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
