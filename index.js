const express = require('express');

const app = express();

app.get('/api/message', (req, res) => {
  res.send({ text: 'This is a message from the server side' });
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    console.log('dirname??', __dirname);
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT);
