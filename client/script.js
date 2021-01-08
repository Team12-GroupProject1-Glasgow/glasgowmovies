var baseUrl = window.location.origin;

$(document).ready(function(){
  checkAuth()
})

function checkAuth() {
  if (!localStorage.access_token) {
    $('#auth-page').show();
    $('#login-page').show();
    $('#register-page').hide();
    $('#movie-page').hide();
    $('#logout-btn').hide();
    '#logout-btn'
  } else {
    $('#auth-page').hide();
    $('#login-page').hide();
    $('#register-page').hide();
    $('#movie-page').show();
    $('#logout-btn').show();
    getTmdb();
    getReview();
    NYTimes();
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
    url: `http://localhost:3000/loginGoogle`,
    data: { id_token }
  })
  .done(response => {
    localStorage.setItem('access_token', response.access_token)
    // masukan fungsi-fungsi seperti login
    checkAuth();
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
  $('#error-message-reg').remove();
  var email = $('#email-reg').val();
  var password = $('#password-reg').val();
  $.ajax({
      method: 'POST',
      url: `http://localhost:3000/register`,
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
  $('#error-message-log').remove();
  var email = $('#email-log').val();
  var password = $('#password-log').val();
  $.ajax({
      method: `POST`,
      url: `http://localhost:3000/login`,
      data: {email, password}
  })
  .done(res => {
      localStorage.setItem('access_token', res.access_token);
      checkAuth();
  })
  .fail(err => {
    console.log(err)
      $('#error-message-log').append(`${err}`)
  })
  .always(() => {
      $('#email-log').val('');
      $('#password-log').val('');
  })
})

$('#logout-btn').click(function(event){
  event.preventDefault();
  localStorage.clear();
  checkAuth();
})

function getTmdb() {
  $.ajax({
      method: 'GET',
      url: `http://localhost:3000/tmdb`,
      headers: { access_token: localStorage.access_token }
  })
  .done(res => {
      var tmdbList = res;
      $('#flex-two').empty();
      for (var i = 0; i < 5; i++) {
        $('#flex-two').append(`
        <div id="sub-flex-two">
          <div id="img-type-2"><img src="${tmdbList[i].poster}" class="img-thumbnail"></div>
          <div>
          <h6><b>${tmdbList[i].title}</b></h6>
          <br>
          <p>
          <h10><b>Release Date</b></h10>
          <span>${tmdbList[i].release}</span>
          </p>
          <h10><b>Rating</b></h10>
          <span>${tmdbList[i].rate}</span>
          </div>
        </div>
        `);
      }
  })
  .fail(err => {
      console.log(err)
  })
}

function getTmdb() {
  $.ajax({
      method: 'GET',
      url: `http://localhost:3000/tmdb`,
      headers: { access_token: localStorage.access_token }
  })
  .done(res => {
      var tmdbList = res;
      $('#flex-two').empty();
      for (var i = 0; i < 5; i++) {
        $('#flex-two').append(`
        <div id="sub-flex-two">
          <div id="img-type-2"><img src="${tmdbList[i].poster}" class="img-thumbnail"></div>
          <div>
          <br>
          <h6><b>${tmdbList[i].title}</b></h6>
          <br>
          <p>
          <h10><b>Release Date</b></h10>
          <span>${tmdbList[i].release}</span>
          </p>
          <h10><b>Rating</b></h10>
          <span>${tmdbList[i].rate}</span>
          </div>
        </div>
        `);
      }
  })
  .fail(err => {
      console.log(err)
  })
}

function getReview() {
  $.ajax({
      method: 'GET',
      url: `http://localhost:3000/review`,
      headers: { access_token: localStorage.access_token }
  })
  .done(res => {
      var reviewList = res;
      $('#mini-flex-two').empty();
      for (var i = 0; i < 4; i++) {
        $('#mini-flex-two').append(`
        <div id="mini-mini-two">
        <p><b>${reviewList[i].headline}</b></p>
        <p>${reviewList[i].summary_short}</p>
        <a href="${reviewList[i].link}">Read here</a>
        <img src="${reviewList[i].multimedia}" class="img-thumbnail">
        </div>
        `);
      }
  })
  .fail(err => {
      console.log(err)
  })
}

function NYTimes() {
  console.log('NYTimesAPIfunc');
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/news',
    headers: {
      access_token: localStorage.access_token
    }
  })
  .done(response => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> RESPONSE:', response);
    $("#nytimesApiData").empty()
    $("#nytimesApiData").append(
      `<div id="nytimesApiData0">${response.articles[0].title}</div>
      <div id="nytimesApiData1">${response.articles[1].title}</div>
      <div id="nytimesApiData2">${response.articles[2].title}</div>
      <div id="nytimesApiData3">${response.articles[3].title}</div>`
    )
  })
  .fail((xhr, status) => {
    console.log(xhr, '<<<<<FAIL')
  })
  .always(() => {
  })
}