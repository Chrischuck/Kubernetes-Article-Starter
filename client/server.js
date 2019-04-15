
const path = require('path');
const express = require('express');

const app = express();

const PORT = 8080

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res) {
    res.sendFile('./dist/index.html');
});


app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("❤️  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});