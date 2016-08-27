state = JSON.parse(localStorage.State);
accounts = JSON.parse(localStorage.Accounts);
let currentUser = state.currentUser;

$('#account-name').val(currentUser.name);
$('#account-email').val(currentUser.email);

function saveAccountSettings() {
  let currentPass = $('#account-current-password').val();
  let newPass = $('#npass').val();
  let confirmPass = $('#cpass').val();
  let name = $('#account-name').val();
  let email = $('#account-email').val();

  if (currentUser.password !== currentPass) {
    alert('Current Password is incorrect. Try again.');
    return;
  } else if(newPass !== confirmPass){
    alert('New password and confirm password do not match. Try again.');
    return;
  } else if(newPass === '' || confirmPass === ''){
    alert('New Password or Confirm password cannot be empty. Try again.');
    return;
  } else if(name === '' || email === ''){
    alert('Name or email cannot be empty. Try again.');
    return;
  } else {

    for(let i = 0; i < accounts.length; i++) {
      if (accounts[i].email === currentUser.email) {
        accounts[i].email = email;
        accounts[i].name = name;
        accounts[i].password = newPass;
        break;
      }
    }

    state.currentUser.name = name;
    state.currentUser.password = newPass;
    state.currentUser.email = email;

    localStorage.setItem('Accounts', JSON.stringify(accounts));
    localStorage.setItem('State', JSON.stringify(state));
    alert('Successful Save!');
  }
}
