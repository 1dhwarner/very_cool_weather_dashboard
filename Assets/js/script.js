// define variables
var cityList =$("#city-list");
var searchedCities = [];
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

var search = $("#search-city");
var searchButton = $(".search-button");

// openweather api key 
var APIKey = "b78502564bdb2b68696e0c9f19ef03ea";


// functions 


// save previous searches to local storage and

init();

function init (){

    var savedSearches = JSON.parse(localStorage.getItem("searchedCities"));

    if (searchedCities === "") {
        searchedCities = savedSearches;
    }

    displaySearches();

}

$("#city-button").on("click", function(event) {
    event.preventDefault();

    var city = $("#search-input").val().trim();

    if (city === "") {
        return;
    }

    searchedCities.push(city);

    // saveSearches();
    // displaySearches();

});

function displaySearches() {

}

function saveSearches() {
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
    console.log(localStorage);
};
