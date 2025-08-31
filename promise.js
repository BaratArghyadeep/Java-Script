const API = "https://api.github.com/users/akshaymarch7";
const users = fetch(API);
users.then(function(response) {

    return response.json();

}).then(function(data) {

    console.log(data);
});