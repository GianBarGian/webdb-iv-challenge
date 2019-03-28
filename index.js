const express = require('express');
const helmet = require('helmet');
const recipes = require('./routes/recipes/recipes');
const err = require('./middlewares/errors/errors');

const app = express();

app.use(helmet());
app.use(express.json());

app.use(recipes)

app.use(err.defaultError);

app.listen(5000, () => console.log('port 5000'));