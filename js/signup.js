function signup() {
  $('#signup').show();
  $('#signupquestion').hide();
  $('#logininfo').hide();
  $('#signupbutton').show();
  $('#loginbutton').hide();

}

function login() {
  let email = $('#email').val();
  let password = $('#password').val();
  let accounts = JSON.parse(localStorage.Accounts);
  let state = JSON.parse(localStorage.State);
  let noemail = true;

  for(let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if(email === account.email) {
      if(password === account.password) {
        // login successful
        state.loggedIn = true;
        state.currentUser = account;
        localStorage.setItem('State', JSON.stringify(state));
        closelogin();
        return;
      } else {
        alert("Looks like that is the wrong password! Try Again.");
      }
      noemail = false;
    }
  }
  if (noemail) {
    alert("Hmm.. there is no such email associated with this site. Sign up below!");
  }

}

function back() {
  let signupname = $('#signupname').val('');
  let signupemail = $('#signupemail').val('');
  let signuppassword = $('#signuppassword').val('');
  let confirmpassword = $('#confirmpassword').val('');
  $('#signup').hide();
  $('#logininfo').show();
  $('#signupquestion').show();
  $('#signupbutton').hide();
  $('#loginbutton').show();
  $('#confirmation').hide();
}

function closelogin() {
  let signupname = $('#signupname').val('');
  let signupemail = $('#signupemail').val('');
  let signuppassword = $('#signuppassword').val('');
  let confirmpassword = $('#confirmpassword').val('');
  $('#signup').hide();
  $('#logininfo').show();
  $('#signupquestion').show();
  $('#signupbutton').hide();
  $('#loginbutton').show();
  $('#confirmation').hide();
  location.reload();
}

function signupconfirm() {
  $('#logininfo').hide();
  $('#loginbutton').hide();

  let signupname = $('#signupname').val();
  let signupemail = $('#signupemail').val();
  let signuppassword = $('#signuppassword').val();
  let confirmpassword = $('#confirmpassword').val();
  let accounts = JSON.parse(localStorage.Accounts);
  let state = JSON.parse(localStorage.State);

  // Check if any inputs empty
  if (signupname === '') {
    signuperror(3);
  }
  if (signupemail === '') {
    signuperror(2);
  }
  if (signuppassword === '') {
    signuperror(4);
  }

  // Password match check
  if(signuppassword !== confirmpassword) {
    signuperror(0);
    return;
  }

  // Check if email exists already
  for(let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if(account.email === signupemail) {
      signuperror(1);
      return;
    }
  }

  let newUser = {
    name: signupname,
    email: signupemail,
    password: signuppassword,
    createdEvents: [],
    goingEvents: [],
    maybeEvents: [],
    picture: './img/profilePic.png',
    myDogs: []
   }

  accounts.push(newUser);
  localStorage.setItem('Accounts', JSON.stringify(accounts));

  state.loggedIn = true;
  state.currentUser = newUser;
  localStorage.setItem('State', JSON.stringify(state));

  $('#signupquestion').hide();
  $('#signup').hide();
  $('#signupbutton').hide();
  $('#confirmation').show();
}

function checkCreateEvent() {
  let state = JSON.parse(localStorage.State);
  if (state.loggedIn === true) {
    if (/index/.test(window.location.href)) {
      window.location ="./views/create_event.html";
    } else {
      window.location ="../views/create_event.html";
    }
  } else {
    alert('You must be logged in to create an event!');
  }
}

function logout() {
  let state = JSON.parse(localStorage.State);
  state.loggedIn = false;
  localStorage.setItem('State', JSON.stringify(state));
  if (/index/.test(window.location.href)) {
    location.reload();
  } else {
    window.location.href ="../index.html";
  }
}

function signuperror(number) {
  switch(number) {
    case 0:
      alert('Password do not match. Try again.');
      break;
    case 1:
      alert('Email already taken. Try again.');
      break;
    case 2:
      alert('Email section cannot be empty. Try again.');
      break;
    case 3:
      alert('Name section cannot be empty. Try again.');
      break;
    case 4:
      alert('Password section cannot be empty. Try again.');
      break;
    default:
      alert('Something went wrong.');
      break;
  }
}
