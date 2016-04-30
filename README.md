## Template for NodeJS using Passport for Local and Twitter Authentications

Versions:

 - Node: 4.4.3
 
 - Passport: ~0.1.17
 
 - Express: ~4.0.0
 
 - MongoDB: ~2.1.0 (Supports MongoDB 3.2)
 
 - Swig: ~1.4.2
 
This setup utilizes a local environment variable file named `env.js`. 
This file serves the process.env data into the template when developing locally.

```javascript
// example env.js file with needed environment variables for local development
// Be sure to store these env variables in the production environment
process.env['MONGO_URL'] = "mongodb://host:port/your-mongodb-db";
process.env['SESSION_SECRET'] = "your-session-secret";
process.env['TWITTER_API_KEY'] = "your-twitterApp-consumerKey";
process.env['TWITTER_API_SECRET'] = "your-twitterApp-consumerSecret";
process.env['TWITTER_CALLBACK'] = "your-twitterApp-callbackUrl";
```
