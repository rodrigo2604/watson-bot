var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config/constants'),
    cors = require('cors'),
    log4js = require('log4js');

var logger = log4js.getLogger('index');
logger.setLevel('INFO');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./api'));

app.use('/api',
    require('./api/watson-bot/routes'));

app.listen(config.express.port, function () {
    logger.info('1 - Server listenning on port ' + config.express.port);
});