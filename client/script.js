
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