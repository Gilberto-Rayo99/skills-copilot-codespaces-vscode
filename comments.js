// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Enable CORS for all requests
app.use(cors());

// Define root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Require comments routes
const commentsRoutes = require('./src/routes/comments.routes');

// Using as middleware
app.use('/api/v1/comments', commentsRoutes);

// Listen to port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});