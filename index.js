// Dependencies
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Config
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");

// Root
app.get("/", (req, res) => {
  res.render("home", { world: "world" });
});

io.on("connection", (socket) => {
  console.log("Socket connected: " + socket.id);
});

http.listen(port, () => {
  console.log("Listening on port " + port);
});
