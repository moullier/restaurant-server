// Dependencies
// =============================================================
let express = require("express");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [{name: "Maria",
phone: "520-213-1232",
email: "moullier@gmail.com",
id: "372"}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  let chosen = req.params.character;

  console.log(chosen);

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/addreservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

  let newReservation = req.body;
  console.log(newReservation);

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  

   reservations.push(newCharacter);

   res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
