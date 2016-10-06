var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var weatherSchema = new Schema({
    humidity: Number,
    pressure: Number,
    temperature: Number,
    tempMax: Number,
    tempMin: Number,
    coord: {
        lat: Number,
        lon: Number,
    },
    description: String,
    wind: {
        deg: Number,
        speed: Number
    },
    country: String,
    place: String
});

var Weather = weatherSchema;

module.exports = Weather;