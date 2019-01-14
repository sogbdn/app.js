var express = require('express');
var app = express();
var port = 3000;

var users = {
 David: {
    age: 52,
    occupation: 'Professor',
    hobby: 'Swimming'
  },

  Robert: {
    age: 34,
    occupation: 'Engineer',
    hobby: 'Running'
  },

  Jane: {
    age: 28,
    occupation: 'Nurse',
    hobby: 'Chess'
  }
}
// To handle slash to one resquest with get
// End points or routes
app.get("/", function(req, res) {
  res.status(200);
  res.send("Hey you ask for the slash '/'");
});

// function callback if /user on adress
app.get('/user', function(req, res) {
  var userQuery = req.query; // {name: 'David'}
  var userKey = userQuery.name;
  console.log(userKey); //David

  console.log(users.userKey);
  var user = {
      name: 'Bob',
      last_name: 'Squarepants',
  };

  var userName = user.name + ' ' + user.last_name;
  res.status(200);
  res.send(userName);


  var user = users[userKey];
  var bob = {
    name: "bob",
    last_name: 'Squarepants',
  };

  res.status(200);

  if(user) {
    res.send(user);
  } else {
    res.send(bob);
  }
});

app.listen(port, function () {
  console.log('Listening to Express at port ' + port);
});


