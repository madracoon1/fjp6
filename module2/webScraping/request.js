const request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('body:', body); // Print the HTML for the Google homepage.
});