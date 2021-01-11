const express = require('express');
const router = express.Router();
const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.static(`${__dirname}/public`));

// Send default page in english
app.get('/example1', (req, res) => {
  res.sendFile(`${__dirname}/public/white-collar.html`);
});

// Send page in french
app.get('/example1-fr', (req, res) => {
  res.sendFile(`${__dirname}/public/white-collar-fr.html`);
});

// Send default page in english
app.get('/example2', (req, res) => {
  res.sendFile(`${__dirname}/public/on-chair.html`);
});

// Send page in french
app.get('/example2-fr', (req, res) => {
  res.sendFile(`${__dirname}/public/on-chair-fr.html`);
});

app.get('/slideshow', (req, res) => {
  res.sendFile(`${__dirname}/public/slideshow.html`);
});

app.get('/slideshow-fr', (req, res) => {
  res.sendFile(`${__dirname}/public/slideshow-fr.html`);
});

app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`Server running at http:/\/${hostname}:${port}/`);
});
