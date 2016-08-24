function signup() {
  $('#signup').show();
  $('#signupquestion').hide();
  $('#logininfo').hide();
  $('#signupbutton').show();
  $('#loginbutton').hide();

}

function closelogin() {
  $('#signup').hide();
  $('#logininfo').show();
  $('#signupquestion').show();
  $('#signupbutton').hide();
  $('#loginbutton').show();

}

function signupconfirm() {
  $('#signup').hide();
  $('#logininfo').hide();
  $('#signupquestion').hide();
  $('#signupbutton').hide();
  $('#loginbutton').hide();
  $('#confirmation').show();
}
