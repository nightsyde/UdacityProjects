// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('website'));

const port = 9000;
// Spin up the server
const server = app.listen(port, listening);
// callback to debug
function listening(){
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};
