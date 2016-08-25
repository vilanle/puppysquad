# Database

To access items in the database:

# State

State is an object that holds logged in (boolean) and currentUser (object).

loggedIn: boolean // whether or not someone is logged in
currentUser: {
  name: string,
  email: string,
  password: string
}

To get the get the data:

JSON.parse(localStorage.State)

# Accounts

Accounts is an array of individual account objects. Each object holds a name, email, and password.
{
  name: string,
  email: string,
  password: string
}
# Events

Events is an array of individual event objects. Each event object holds a title, date, time, breed, dogSize, location, price, description, and image.

{
  title: string,
  date: string,
  time: string,
  breed: string,
  dogSize: string,
  location: string,
  price: string,
  description: string,
  image: string
}

# Filters

Filters is an object that holds breed, dogSize, date, price, distanceFrom, and location. Used for filtering of data if need be.

{
  breed: string,
  dogSize: string,
  date: string,
  price: string,
  distanceFrom: string,
  location: string
};

# Searched

Searched is a string that holds the last thing a user searched for in the searchbar in the homepage.
