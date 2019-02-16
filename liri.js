//add axios npm package
var axios = require("axios");

require("dotenv").config();

var keys = require("./keys.js");

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for Mr. Nobody
if (!search) {
    search = "Mr. Nobody";
}

// By default, if no search term is provided, search for "Mr. Nobody"
if (!term) {
    term = "Mr. Nobody";
}

// Print whether searching for a concert, song, or movie and print the term as well
if (search === "concert-this") {
    console.log("Searching for concert");
    bandsInTown(term);
} else if (search === "spotify-this-song") {
    console.log("Searching for song");
    tv.findShow(term);
} else if (search === "movie-this") {
    console.log("Searching for movie");
    OMDB(term);
}


//Bands in Town
var bandsInTown = function () {
    //findConcert takes in name of band and searches the bands in town API
    this.findConcert = function () {
        var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
        // We then run the request with axios module on a URL with a JSON
        axios.get(URL).then(function (response) {
            // place response.data into a variable jsonData
            var jsonData = response.data;

            //concertData = the string containing the concert data we will print to console
            var concertData = [
                "The venue is: " + jsonData.venue.name,
                "The venue location is: " + jsonData.venue.city,
                "The date of event is: " + jsonData.datetime
            ].join("\n\n");
        }
        );
    }
}

// OMDB 
var OMDB = function () {
    //findMovie takes in name of movie and searches the OMDB API
    this.findMovie = function () {
        var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
        //run the request with axios module on a URL with a JSON
        axios.get(URL).then(function (response) {
            //place response.data into a variable jsonData
            var jsonData = response.data;

            //movieData = the string containing the movie data we will print to console
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

//SPOTIFY
var spotify = new Spotify(keys.spotify);

var song =
    // We then run the request with axios module on a URL with a JSON
    axios.get("spotify" + song).then(
        function (response) {
            // Then we print out the imdbRating
            console.log("Artist: " + response.data.imdbRating);
            console.log("Song name: " + response.data.imdbRating);
            console.log("Preview link: " + response.data.imdbRating);
            console.log("Album: " + response.data.imdbRating);
            //if no song provided program will play "The Sign" by Ace of Base
        }
    );


