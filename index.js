var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.set('view engine', 'jade');


app.get('/template', function (req, res) {
  res.render('ticket', {
    ticket: {
      id: 23
    }
  });
});

app.listen(PORT);
console.log('Server started');