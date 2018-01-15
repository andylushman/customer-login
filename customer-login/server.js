'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/users');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//db config -- REPLACE USERNAME/PASSWORD/DATABASE WITH YOUR OWN FROM MLAB!
var mongoDB = 'mongodb://admin:login@ds255767.mlab.com:55767/login-app';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent user
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//adding the /users route to our /api router
router.route('/users')
  //retrieve all users from the database
  .get(function(req, res) {
    //looks at our user Schema
    User.find(function(err, users) {
      if (err)
        res.send(err);
      //responds with a json object of our database users.
      res.json(users)
    });
  })
  //post new user to the database
  .post(function(req, res) {
    var user = new User();
    (req.body.firstName) ? user.firstName = req.body.firstName : null;
    (req.body.lastName) ? user.lastName = req.body.lastName : null;
    (req.body.email) ? user.email = req.body.email : null;

    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully added!' });
    });
  });

//Adding a route to a specific user based on the database ID
router.route('/users/:user_id')
//The put method gives us the chance to update our user based on the ID passed to the route
  .put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err);
      //setting the new name and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.firstName) ? user.firstName = req.body.firstName : null;
      (req.body.lastName) ? user.lastName = req.body.lastName : null;
      (req.body.email) ? user.email = req.body.email : null;
      //save user
      user.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'User has been updated' });
      });
    });
  })
  //delete method for removing a user from our database
  .delete(function(req, res) {
    //selects the user by its ID, then removes it.
    User.remove({ _id: req.params.user_id }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User has been deleted' })
    })
  });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
