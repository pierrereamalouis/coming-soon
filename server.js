const express = require('express');
const router = express.Router();
const app = express();
const hostname = 'localhost';
const port = 3000;
const exphbs = require('express-handlebars');
const i18n = require('./i18n.config');
const mailchimp = require('./mailchimp.config');

const hbs = exphbs.create({
  helpers: {
    i18n: () => {
      i18n.__.apply(this, arguments);
    },
  },
  defaultLayout: false,
  extname: '.hbs',
});

// Setting handlebars as view/template engine to be used in express
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Make the static style and script file available to the app
app.use(express.static(`${__dirname}/public`));

// To parse json
app.use(express.json());

app.use('/', router);

app.use(i18n.init);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/fr', (req, res) => {
  res.setLocale('fr');
  res.render('index');
});

app.post('/subscribe', (req, res) => {
  const { email, js } = req.body;

  const contactID = mailchimp.addEmailToAudience(email);

  if (contactID) {
    res.status(200).json({
      status: 'success',
    });
  } else {
    res.status(500).send({ error: 'Something failed!' });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http:/\/${hostname}:${port}/`);
});
