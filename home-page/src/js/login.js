// document.getElementById('login-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

// fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
      
//       username: 'emilys',
//       password: 'emilyspass',
//       expiresInMins: 30, // optional, defaults to 60
//     }),
//     credentials: 'include' // Include cookies (e.g., accessToken) in the request
//   })
//   .then(res => res.json())
//   .then(console.log);
// });