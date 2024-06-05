const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes for tutorial files
app.get('/part1', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part1.html'));
});

app.get('/part2', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part2.html'));
});

app.get('/part3', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part3.html'));
});

app.get('/part4', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part4.html'));
});

app.get('/part5', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part5.html'));
});

app.get('/part6', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part6.html'));
});

app.get('/part7', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part7.html'));
});

app.get('/part8', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part8.html'));
});

app.get('/part9', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part9.html'));
});

app.get('/part10', (req, res) => {
  res.sendFile(path.join(__dirname, 'tutorial/part10.html'));
});

// Routes for playground files
app.get('/playground1', (req, res) => {
  res.sendFile(path.join(__dirname, 'playground/playground1.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
