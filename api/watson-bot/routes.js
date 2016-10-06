var express = require('express'),
    controller = require('./controller'),
    router = express.Router();

router.route('/conversation/watson-bot')
    .post(controller.post);

module.exports = router;