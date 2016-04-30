// env vars for local developement
if (!process.env.TWITTER_API_KEY) { require('../env'); }

// expose our config directly to our application using module.exports
module.exports = {

    'twitterAuth' : {
        'consumerKey'       : process.env.TWITTER_API_KEY,
        'consumerSecret'    : process.env.TWITTER_API_SECRET,
        'callbackURL'       : process.env.TWITTER_CALLBACK
    }

};