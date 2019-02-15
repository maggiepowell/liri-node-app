require("dotenv").config();

  var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//add axios npm package
var axios = require("axios");

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

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("Artist: " + response.data.imdbRating);
    console.log("Song name: " + response.data.imdbRating);
    console.log("Preview link: " + response.data.imdbRating);
    console.log("Album: " + response.data.imdbRating);
//if no song provided program will play "The Sign" by Ace of Base
  }
);




// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the following:
    console.log("Title: " + response.data.imdbRating);
    console.log("Year of release: " + response.data.imdbRating);
    console.log("IMDB rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes rating: " + response.data.imdbRating);
    console.log("Country where produced: " + response.data.imdbRating);
    console.log("Language: " + response.data.imdbRating);
    console.log("Plot: " + response.data.imdbRating);
    console.log("Cast: " + response.data.imdbRating);
  }
);

