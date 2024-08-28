// Create web server
// Create a web server that serves the comments.html file and the comments.json file.
// The comments.html file should be served at the /comments endpoint and the comments.json file should be served at the /api/comments endpoint.

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

app.get('/api/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.json'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});