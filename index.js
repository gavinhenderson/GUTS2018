// Dependencies
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./app/routes.js");
const USERS = require("./users.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Config
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// passport
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = USERS.find((currentUser) => currentUser.number === username);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  }),
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(session({ secret: "conorhatestrains" }));
app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

io.on("connection", (socket) => {
  console.log("Socket connected: " + socket.id);
});

http.listen(port, () => {
  console.log("Listening on port " + port);
});
