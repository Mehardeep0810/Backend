const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const port=5500;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret:'mehar',
  resave: false,
  saveUninitialized: true,
  cookie:{maxAge: 60000}
}));

app.get('/', function (req, res) {
  res.send('<h5>Mehardeep Kaur 2210997287</h5><h1>Home Page</h1><a href="/login">Click for Login Page</a>');
});

const users={
  'username':'mehar',
  'password':'mehar0810'
};

app.get('/login', (req, res) => {
  if(req.session.loggedIn){
    res.redirect('/dashboard');
  }
  else{
    res.send(`
        <form method="POST" action="/login">
            <label>Username:</label>
            <input type="text" name="username" required><br>
            <label>Password:</label>
            <input type="password" name="password" required><br>
            <button type="submit">Login</button>
        </form>
    `);
  }
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simple authentication check
    if (username === users.username && password === users.password) {
        req.session.loggedIn = true;
        req.session.username = users.username;
        res.redirect('/dashboard');
    } else {
        res.send('Invalid username or password. Please <a href="/login">try again</a>.');
    }
});
// Middleware to protect routes
function isAuthenticated(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Protected route
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`
        <h1>Welcome, ${req.session.username}</h1>
        <p>You are logged in.</p>
        <a href="/logoutpage">Logout</a>
    `);
});

// Logout route
app.get('/logout', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/dashboard');
    }
});
app.get('/logoutpage', (req, res) => {
            req.session.destroy(err => {
            if (err) {
                    return res.send('Error logging out.');
            }
            res.send(`
                <p>You are successfully logged out. click below to login again</p>
                <a href="/login">Login</a>`)
        });
});

// Start the server
app.listen(5500, () => {
    console.log('Server running on http://localhost:5500');
});