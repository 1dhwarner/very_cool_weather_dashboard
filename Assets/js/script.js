// define variables
var city = "";
var cities = [];
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

var search = $("#search-city");
var searchButton = $("#search-button");

// openweather api key 
var APIKey = "b78502564bdb2b68696e0c9f19ef03ea";


// functions 

// clears out local storage 
function deleteStorage () {
    localStorage.clear();
  };

// save previous searches 
$('.search').on("click", function (event) {
    event.preventDefault();
    city = $(this).parent(".searchBtn").sibilings(".searchCity").val().trim();
    if (city === "") {
        return; 
    };
    cities.push(city);

    localStorage.setItem("city", JSON.stringify(cities));
    fiveDayEl.empty();

    // displays selected cities weather to the main card as well as five day forecast 
    getCurrentWeather();
    // save search to the side bar 
    getPreviousSearches();
});


// Displays weather data to the main card 
function getCurrentWeather() {
    var openweatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&apikey=${APIKey}";

    

}


// save buttons for previous searches 



