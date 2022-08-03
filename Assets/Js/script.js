var searchEl = document.querySelector("#search_btn");
var inputEl = document.querySelector(".input");
var clearEl = document.querySelector("#clear_search");
var recentEl = document.querySelector("#recent_cities");
var dailyEl = document.querySelector("#daily_forcast");
var day1El = document.querySelector("#day1");
var day2El = document.querySelector("#day2");
var day3El = document.querySelector("#day3");
var day4El = document.querySelector("#day4");
var day5El = document.querySelector("#day5");
var APIKey = "237d2dfde4a0e93ba29a4167915f9688";

// Clock
let clock = document.querySelector(".clock");
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Search Button
searchEl.addEventListener("click", function () {
  let city = inputEl.value;
  let cityUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=" +
    APIKey;

  fetch(cityUrl);
  console.log(cityUrl);

  //   fetch request to api using city
  // use geocode api with city to get lat/long
  // call getWeather(data[0].lat, data[0].lon)
});

// requestUrl =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=" +
//   lat +
//   "&lon=" +
//   lon +
//   "&exclude=hourly,minutely&appid={API key}";

// create getWeather(lat, lon)
// fetch request to weather api
// create weather cards (5)
// for loop to run through the data
