var testService = require('./service'),
    moment = require('moment'),
    log4js = require('log4js'),
    logger = log4js.getLogger('features');

logger.setLevel('INFO');

var controller = {
    get: get,
    post: post
}

function get(request, response) {
    testService
        .find(request.params.userId)
        .then(success)
        .catch(error)

    function success(data) {
        response.status(200).send(data);
    }

    function error(err) {
        response.status(400).send(err);
    }
}

function post(request, response) {

    testService
        .saveCurrentTest(request.body)
        .then(success)
        .catch(error)

    function success(res) {
        response.status(200).send(res);
    }

    function error(err) {
        response.status(400).send(err);
    }
}

module.exports = controller;