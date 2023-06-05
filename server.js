const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'avinay',
});

// Connect to the MySQL server
con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// Handle form submission
app.post('/api/form', (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Received form data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Create a new record in the database
  const sql = 'INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)';
  const values = [name, email, subject, message];

  // Execute the SQL query
  con.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error inserting data into database:', error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      return;
    }

    console.log('Data inserted successfully');
    console.log('Inserted ID:', result.insertId);

    const response = {
      status: 'success',
      message: 'Form submitted successfully!',
    };

    res.json(response);
  });
});

app.post('/api/form', (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Received form data for Form 2:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Create a new record in the database for Form 2
  const sql = 'INSERT INTO service_quate (name, email, subject, message) VALUES (?, ?, ?, ?)';
  const values = [name, email, subject, message];

  // Execute the SQL query
  con.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error inserting data into database:', error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      return;
    }

    console.log('Data inserted successfully for Form 2');
    console.log('Inserted ID:', result.insertId);

    const response = {
      status: 'success',
      message: 'Form submitted successfully for Form 2!',
    };

    res.json(response);
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
