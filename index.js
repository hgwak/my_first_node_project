const express = require('express');

const server = express();//we are constructing a server to handle the request

server.get('/', (request, response)=>{//server.get is the get request
    //request is the query string, response is what we the server are return to the client

    //console.log(response);//request and response are objects
    response.send('<h1>My Awesome Node Site!</h1>');

}); //we are defining a route for a get request
                //all these methods are building into this server
                //'/' is the home route
                // all routes have a function
                //anonymous function that takes in request and response

server.get('/api/user', (request, response)=>{//this is an API endpoint
    const user = {//this is werhe you would write your MySQL in the real world
        name: 'Marty McFly',
        occupation: 'Slacker',
        age: 17,
        email: 'marty@timetravel.com'
    }

    response.send(user); //.send sends the object back to the user
});




server.listen(9000, ()=>{//port number is like a door
    //if the client uses the right 'door' to access the site the return an anonymouse function
    console.log('Server running at localhost:', 9000)
});//listen is a method
                //port 80 is the default for the internet connection
                //https runs on port 443
                //we can choose any port number we want
                //if you have more than one server running on one environment, they all have to have a different port
                //takes in a parameter of a port number and a fat arrow function
