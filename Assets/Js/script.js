var searchBtn = document.querySelector("#search_btn");
var inputEl = document.querySelector(".input");

searchBtn.addEventListener("click", function () {
  var city = inputEl.value;
  //   fetch request to api using city
  // use geocode api with city to get lat/long
  // call getWeather(data[0].lat, data[0].lon)
});

// create getWeather(lat, lon)
// fetch request to weather api
// create weather cards (5)
// for loop to run through the data
