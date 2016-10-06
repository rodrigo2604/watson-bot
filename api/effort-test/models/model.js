var mongoose = require('mongoose'),
    moment = require('moment'),
    weatherModel = require('./weather'),
    Schema = mongoose.Schema;

var eventSchemaFromPosition = new Schema({
    latitude: Number,
    longitude: Number
});

var eventSchemaFromProtocol = new Schema({
    title: String,
    description: String,
    steps: Number,
    duration: Number
});

var eventSchemaFromDuration = new Schema({
    minutes: Number,
    hours: Number,
    seconds: Number,
    millis: Number
});

var eventSchemaFromValuesOnStepByStep = new Schema({
    HR: Number,
    calories: Number,
    distance: Number,
    meanVelocity: Number,
    steps: Number
});

var testSchema = new Schema({
    userId: {type: Number, required: true},
    date: {
        type: Date,
        default: moment().format(),
        required: true
    },
    weather: weatherModel,
    path: [eventSchemaFromPosition],
    pathIcons: [eventSchemaFromPosition],
    protocol: eventSchemaFromProtocol,
    duration: eventSchemaFromDuration,
    steps: [eventSchemaFromValuesOnStepByStep]
});

var Test = mongoose.model('Test', testSchema);

module.exports = Test;