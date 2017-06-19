/**
 * Created by tedta on 2017/6/19.
 */
/*
  Tutorial Reference: https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
  Sample Code: https://github.com/chenkie/angular-cli-heroku
 */
// server.js
const path = require('path');
const express = require('express');
const app = express();

/*
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
*/

// Run the app by serving the static files
// in the dist directory
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Start the app by listening on the default
// Heroku port
const port = Number(process.env.PORT || 8080);
app.listen(port, function() {
  console.log("Listening on " + port);
});

