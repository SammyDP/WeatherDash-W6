var searchEl = document.querySelector("#search_btn");
var inputEl = document.querySelector(".input");
var clearEl = document.querySelector("#clear_search");
var recentEl = document.querySelector("#recent_cities");
var dailyEl = document.querySelector("#daily_city");
var dayTempEl = document.querySelector("#daily_temp");
var dayHumidityEl = document.querySelector("#daily_humidity");
var dayWindEl = document.querySelector("#daily_wind");
var dayUVEl = document.querySelector("#daily_uv");
var day1El = document.querySelector("#day1");
var day2El = document.querySelector("#day2");
var day3El = document.querySelector("#day3");
var day4El = document.querySelector("#day4");
var day5El = document.querySelector("#day5");
var APIKey = "237d2dfde4a0e93ba29a4167915f9688";

// Date
var currentDay = moment().format("dddd l");
$(".date").text(currentDay);

// Clock
let clock = document.querySelector(".clock");
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Search Button
searchEl.addEventListener("click", function () {
  let city = inputEl.value;
  let currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  fetch(currentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

// let cityUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

// fetch(cityUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     const forecastEls = document.querySelectorAll(".f");
//     for (i = 0; i < forecastEls.length; i++) {
//       forecastEls[i].innerHTML = "";
//     }
//   });
// create a fetch to get uv and insert in dayUVEl
// create a fetch to get 5 day, for loop and insert in day, icon, temp, wind, humidity
// wrap all fetchs in one function to be active on search
// create "click" save funtions
// create "click" clear functions
