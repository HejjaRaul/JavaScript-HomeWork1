/*
    In this program I will discribe the attributes 
    of my favorite song, which is Lowlife by Adam Jensen 
*/

//Here I save the name of the song as a String
var songName = "Lowlife";

//Here I save the artist name in an object with 2 string fields
//One for the first name and one for the last name
var artistName = {
  firstName: "Adam",
  lastName: "Jensen",
};

/*
   Here we have an object for the release date which has 3 fields
   One for the day, which is a number, one for month, which is string
   And the last one for year, which is again a number
*/
var releaseDate = {
  day: 15,
  month: "January",
  year: 2021,
};

//I save the genre in a string
var genre = "Indie";

//Here I save if the song is explicit or not in a boolean
var isSongExplicit = true;

/*
    Saving the duration both in second and minutes
    For duration in minutes I made a rule of three to see 
    how much percetange of a minute is 13 seconds
*/
var durationInSeconds = 193;
var durationInMinutes = 3.21;

//And finally here I saved all the duration in an array
var duration = [durationInSeconds, durationInMinutes];

//Here I display all the attributes

console.log("The name of the song is " + songName);
console.log(
  "The name of the artist is " +
    artistName.firstName +
    " " +
    artistName.lastName
);
console.log(
  "The release date of the song is " +
    releaseDate.day +
    " " +
    releaseDate.month +
    " " +
    releaseDate.year
);
console.log(isSongExplicit);
console.log("The genre of the song is " + genre);
console.log(
  "The duration of the song is: in seconds:" +
    duration[0] +
    ", in minutes:" +
    duration[1]
);
