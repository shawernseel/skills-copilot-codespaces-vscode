// Create web server
// Create a new web server using the express.js framework.
// This web server will listen on port 3000 and respond with the message "Hello, World!" for requests to the root URL.
// Use the provided comments.js file as a starting point. The express.js module has already been included for you.
// You can run the comments.js file using node comments.js and then use curl to make a request to the server.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});