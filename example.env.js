// example env.js file with needed environment variables for local development
// Be sure to store these env variables in the production environment
process.env['MONGO_URL'] = "mongodb://host:port/your-mongodb-db";
process.env['SESSION_SECRET'] = "your-session-secret";
process.env['TWITTER_API_KEY'] = "your-twitterApp-consumerKey";
process.env['TWITTER_API_SECRET'] = "your-twitterApp-consumerSecret";
process.env['TWITTER_CALLBACK'] = "your-twitterApp-callbackUrl";