const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// List to hold data
let notes = [];

// api requests
app.route('/notes').get(function (req, res) {
    res.json(notes);
}).post(function (req, res) {
    notes = [...notes, {
        title: req.body.title,
        note: req.body.note
    }];
    res.send('Added successfully.');
}).delete(function (req, res) {
    notes = notes.filter(function (item, index) {
        return index != parseInt(req.query.id);
    });
    res.send('Deleted successfully.');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}.`)
});