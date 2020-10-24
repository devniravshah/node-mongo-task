const express = require('express');
const bodyParser = require('body-parser');
require('./config/db.config');
// require('./helpers'); // SEEDER FILE

const app = express();

app.use(bodyParser.json());

require('./controller')(app);

app.use((err, req, res, next) => {
  if(err) {
    res.setHeader('Content-type', 'application/json');
    res.statusCode = err.statusCode;
    res.end(JSON.stringify({message: err.message}));
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`node server started ${port}`);
});