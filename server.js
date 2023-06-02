const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/form', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received form data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  const response = {
    status: 'success',
    message: 'Form submitted successfully!',
  };

  res.json(response);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
