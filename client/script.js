var baseUrl = window.location.origin;

$(document).ready(function(){
  checkAuth()
})

function checkAuth() {
  if (!localStorage.access_token) {
      $('#login-page').show();
      $('#register-page').hide();
      $('#movie-page').hide();
  } else {
      $('#login-page').hide();
      $('#register-page').hide();
      $('#movie-page').show();
  }
}

function register() {
  $('#register-page').show();
  $('#login-page').hide();
  $('#movie-page').hide();
}

$('#register').click(function(event){
  event.preventDefault();
  register();
})

// fungsi login untuk google
function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token
  
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/loginGoogle',
    data: { id_token }
  })
  .done(response => {
    localStorage.setItem('access_token', response.access_token)
    // masukan fungsi-fungsi seperti login
  })
  .fail((xhr, status) => {
    console.log(xhr, '<<<<<')
  })
}

// bisa dimasukan ketika tombol logout ditekan!
function googleLogout() {
  const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}

// REGISTER LOGIN

$('#register-btn').click(function(event) {
  event.preventDefault();
  $('#error-message').val('');
  var email = $('#email-reg').val();
  var password = $('#password-reg').val();
  $.ajax({
      method: 'POST',
      url: `${baseUrl}/register`,
      data: {email, password}
  })
  .done(res => {
      checkAuth();
  })
  .always(() => {
      $('#email-reg').val('');
      $('#password-reg').val('');
  })
})

$('#login-btn').click(function(event){
  event.preventDefault();
  $('#error-message').val('');
  var email = $('#email-log').val();
  var password = $('#password-log').val();
  $.ajax({
      method: `POST`,
      url: `${baseUrl}/login`,
      data: {email, password}
  })
  .done(res => {
      localStorage.setItem('access_token', res.access_token);
      checkAuth();
  })
  .fail(err => {
    console.log(err)
      $('#error-message').append(`${err}`)
  })
  .always(() => {
      $('#email').val('');
      $('#password').val('');
  })
})

$('#logout-btn').click(function(event){
  event.preventDefault();
  localStorage.clear();
  checkAuth();
})