var config = {
    express: {
        //port: 6380,
        port: process.env.PORT || 5000
    },
    /*mongo: {
        url: 'mongodb://localhost/',
        name: 'watson-bot'
    },
    mongodb: {
        url: 'mongodb://',
        user: 'altran.developer',
        password: 'Altran-2014',
        port: '@ds011382.mlab.com:11382/',
        bd: 'interactive-health',
        name: 'watson-bot'
    },*/
    watsonBotCredentials: {
        url: "https://gateway.watsonplatform.net/conversation/api",
        password: "r2x8eqqY8xsx",
        username: "f7cb8a63-342c-4ca5-9555-c58748fba608"
    }
}

module.exports = config;