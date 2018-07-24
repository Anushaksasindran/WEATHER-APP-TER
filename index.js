const request = require('request');
const argv = require('yargs').argv;


let apiKey = '75ca23370373fe420e11234633f4c968';
let city = argv.c || 'Mumbai';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


// var request = require('request');
 request(url, function (error, response, body) {
if(error){
  console.log('error:', error); // Print the error if one occurred
}
else{
  let weather = JSON.parse(body);
  let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
  console.log(message);
}
//
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
 });
