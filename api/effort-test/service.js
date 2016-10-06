var Test = require('./models/model'),
    q = require('q'),
    log4js = require('log4js'),
    logger = log4js.getLogger('config');

var testService = {
    find: find,
    saveCurrentTest: saveCurrentTest
}

function find(userIdFromParams) {
    var _q = q.defer();

    var userIdParsed = parseInt(userIdFromParams, 10);

    Test.find({
        userId: userIdParsed
    }, function (err, tests) {

        err ? _q.reject(err) : _q.resolve(tests);
    })
    return _q.promise;
}


function saveCurrentTest(data) {
    var _q = q.defer();
    var testModel = new Test(data);

    testModel.save(function (err) {
        err ? _q.reject(err) : _q.resolve(testModel._id);
    })

    return _q.promise;
}

module.exports = testService;