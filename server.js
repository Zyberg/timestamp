const express = require('express');
const bodyparser = require('body-parser')
const timestamp = require('./timestamp');
const app = express();

app.set("views", __dirname + '/views');
app.set("view engine", "pug");

app.use(express.static('public'));
app.use(bodyparser.json()); // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // to support URL-encoded bodies


app.get("/", (req, res) => {
  res.render("index");
});

app.post("/date", (req, res) => {
  var date = timestamp.timestampObject(req.body.date);
  
  res.render("dated", { natural: date["natural"], unix: date["unix"]});

});


app.get("/:input", (req, res) => {
  // get the input from the request parameters
  var input = req.params.input;

  // ensure that the input was passed
  if (!input)
    res.send("Pass in some input for this to work!");

  res.send(timestamp.timestampObject(input))
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});