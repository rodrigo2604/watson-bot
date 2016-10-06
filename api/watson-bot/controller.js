var watsonBotService = require('./service'),
    log4js = require('log4js'),
    logger = log4js.getLogger('features');

logger.setLevel('INFO');

var controller = {
    post: _post
}

function _post(req, res) {
    watsonBotService.sendText(req.body.text)
        .then(responseFromWatson => res.send(responseFromWatson.output.text))
        .catch(err => res.status(400).send(err));
}

module.exports = controller;