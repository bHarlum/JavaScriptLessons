var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
    name: {
        first: String, 
        last: String
    },
    macAddress: String,
    cohort: String,
});

var logs = new Schema({
    macAddress: String,
    firstSeen: {
        day: Number,
        month: Number,
        year: Number,
        hours: Number,
        minutes: Number
    }
});

var admin = new Schema({
    name: String,
    password: String
});


