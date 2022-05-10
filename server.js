const express = require('express'); // importing library - used for server
const bcrypt = require('bcrypt-nodejs'); //used for password encryption
const cors = require('cors'); // API calls between server and front end
const knex = require('knex'); // connect database with server

const register = require('./controllers/register'); //importing local files
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({ // connecting database user with the server
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'smart-brain'
  }
});

const app = express(); // used for express for get post etc

app.use(cors()) // API calls between server and front end
app.use(express.json()); // used for express for get post etc
app.get('/', (req, res)=> { res.send(db.users) }) // for route / get user info
app.post('/signin', signin.handleSignin(db, bcrypt)) // for route sign
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
