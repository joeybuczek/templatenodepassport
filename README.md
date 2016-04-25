## Template for NodeJS using Passport for Authentication

Versions:

 - Node: 4.4.3
 
 - Passport: ~0.1.17
 
 - Express: ~4.0.0
 
 - MongoDB: ~2.1.0 (Supports MongoDB 3.2)
 
 - Swig: ~1.4.2
 
This setup utilizes a local environment variable file named `env.js`. 
This file serves the process.env data into the template when developing locally.

```javascript
// Example env.js file of required environment variables:
process.env["MONGO_URL"] = "http://localhost:27017/exampledb";
process.env["SESSION_SECRET"] = "sessionsecretexample";
```


