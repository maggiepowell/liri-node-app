//add axios npm package
var axios = require("axios");

require("dotenv").config();

  var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


var artist = 
// We then run the request with axios module on a URL with a JSON
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    // Then we print out the name of venue, venue location, date of event
    console.log("The venue is: " + response.data.imdbRating);
    console.log("The venue location is: " + response.data.imdbRating);
    console.log("The date of event is: " + response.data.imdbRating);
  }
);



// Here we incorporate the "axios" npm package
var axios = require("axios");
var song =
// We then run the request with axios module on a URL with a JSON
axios.get("spotify" + song).then(
  function(response) {
    // Then we print out the imdbRating
    console.log("Artist: " + response.data.imdbRating);
    console.log("Song name: " + response.data.imdbRating);
    console.log("Preview link: " + response.data.imdbRating);
    console.log("Album: " + response.data.imdbRating);
//if no song provided program will play "The Sign" by Ace of Base
  }
);




// OMDB run the request with axios module on a URL with a JSON
var OMDB = function(){
    //findMovie takes in name of movie and searches the OMDB API
this.findMovie = function (movie) {
    var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
axios.get(URL).then(function(response) {
    //place response.data into a variable jsonData
    var jsonData = response.data;

    //movieData = the string containint the movie data we will print to console
    var movieData = [
        "Title:" + jsonData.Title,
        "Year of release:" + jsonData.Year,
        "IMDB rating: " + jsonData.imdbRating,
        "Rotten Tomatoes rating: " + jsonData.Ratings[1].Source,
        "Country where produced: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Cast: " + jsonData.Actors
    ].join("\n\n");

    //print movieData to console
    console.log(movieData)
  }
);
}
}