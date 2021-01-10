const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static(`${__dirname}/public`));

// Send default page in english
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index-en.html`);
});

// Send page in french
app.get('/fr', (req, res) => {
  res.sendFile(`${__dirname}/public/index-fr.html`);
});

app.get('/slideshow', (req, res) => {
  res.sendFile(`${__dirname}/public/slideshow.html`);
});

app.use('/', router);

app.listen(3000);
