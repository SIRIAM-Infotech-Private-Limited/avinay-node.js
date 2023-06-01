const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7000; // You can change the port number if needed

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Redirect root URL to the form submission route
app.get('/', (req, res) => {
  res.redirect('/submit-form');
});

// Define a route to handle form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body; // Access form data from the request body
  // Store or process the form data as needed
  console.log(formData); // Example: Print the form data to the console

  // Send a response back to the client
 res.send('You submited the form');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
