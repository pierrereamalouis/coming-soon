const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static(`${__dirname}/public`));

// Send default page in french
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index-fr.html`);
});

// Send page in english
app.get('/en', (req, res) => {
  res.sendFile(`${__dirname}/public/index-en.html`);
});

app.use('/', router);

app.listen(3000);
