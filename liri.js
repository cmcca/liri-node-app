var input = process.argv[2];
var axios = require("axios");

var Spotify = require('node-spotify-api');


//http://www.omdbapi.com/?i=tt3896198&apikey=49b8dfd6
/* axios.get("http://www.omdbapi.com/?t="+input+"&apikey=49b8dfd6").then(
  function(response) {
    console.log(response.data);
  }
); */

/* search: function({ 
    type: 'artist OR album OR track', 
    query: 'My search query', 
    limit: 20 }, callback);

 */

var spotify = new Spotify({
    id: "369ea468106442b88961b5d4a8764607",
    secret: "90e8f357a6354b86ab8da95bcd068634"
  });
   
  spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });