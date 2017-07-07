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
  var date = req.body.date;
  
  // ensure that input isn't an empty string
  if (date == "")
    res.render("error", { error: "You passed in an EMPTY date!" });
  
  res.render("dated", { date: JSON.stringify( timestamp.timestampObject(date)) });

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});