//add axios npm package
var axios = require("axios");

require("dotenv").config();
var keys = require("./keys.js");
//SPOTIFY
var Spotify = require('node-spotify-api');


// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since input may contain spaces
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
    song(term);
} else if (search === "movie-this") {
    console.log("Searching for movie");
    console.log(term);
    OMDB();
}


//Bands in Town
function bandsInTown() {
    //findConcert takes in name of band and searches the bands in town API
    var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
    // We then run the request with axios module on a URL with a JSON
    axios.get(URL).then(function (response) {
        // place response.data into a variable jsonData
        var jsonData = response.data;

        //concertData = the string containing the concert data we will print to console
        var concertData = [
            "The venue is: " + jsonData[0].venue.name,
            "The venue location is: " + jsonData[0].venue.city,
            "The date of event is: " + jsonData[0].datetime
        ].join("\n\n");

        //print concertData to console
        console.log(concertData);
    }
    );
}

// OMDB 
function OMDB() {
    console.log(term);

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
        console.log(movieData);
    });
}



function song(){
    //run the request with axios module on a URL with JSON
    var getSpotify = new Spotify(keys.spotify);
    getSpotify.search({ type: 'track', query: term }, function(err, response){
        if (err) {
            return console.log(err);
        }


        //place response.data into a variable jsonData
        var jsonData = response.tracks.items[0];

         //songData = the string containing the song data we will print to console
         var songData = [
             "Artist: " + jsonData.album.artists.name,
             "Song name: " + jsonData.name,
             "Preview link: " + jsonData.album.external_urls.spotify,
             "Album: " + jsonData.album.name
         ].join("\n\n");

        //print songData to console
        console.log(songData);
    });
}
//if no song provided program will play "The Sign" by Ace of Base
