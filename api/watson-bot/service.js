var watson = require('watson-developer-cloud'),
    q = require('q'),
    config = require('../../config/constants');

var watsonBotService = {
    sendText: _sendText
}

var conversation = watson.conversation({
    username: config.watsonBotCredentials.username,
    password: config.watsonBotCredentials.password,
    version: 'v1',
    version_date: '2016-09-20'
});
// Replace with the context obtained from the initial request
var context = {};

function _sendText(text) {
    var _d = q.defer();
    conversation.message({
        workspace_id: '355f2476-5b9e-46eb-ad88-32b573480466',
        input: { 'text': text },
        context: text ? context : {}
    }, function (err, response) {
        if (err) {
            context = {};
            _d.reject(err);
        }
        else {
            context = response.context;
            _d.resolve(response);
        }
    });
    return _d.promise;
}

module.exports = watsonBotService;

