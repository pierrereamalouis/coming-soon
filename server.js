const express = require('express');
const router = express.Router();
const app = express();
const hostname = 'localhost';
const port = 3000;
const exphbs = require('express-handlebars');
const i18n = require('./i18n.config');

const hbs = exphbs.create({
  helpers: {
    i18n: () => {
      i18n.__.apply(this, arguments);
    },
  },
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/public`));

app.use('/', router);

app.use(i18n.init);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/fr', (req, res) => {
  res.setLocale('fr');
  res.render('index');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http:/\/${hostname}:${port}/`);
});
