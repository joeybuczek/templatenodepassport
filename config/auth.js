// expose our config directly to our application using module.exports
module.exports = {

    'twitterAuth' : {
        'consumerKey'       : 'HmlbPE6jZFuHSztR4aUZ60465',
        'consumerSecret'    : 'beli33zVyKh1X5Lh1PN1Bu6i8bICZA3mBdErepW3wWrc5QrI5g',
        'callbackURL'       : 'http://127.0.0.1:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};