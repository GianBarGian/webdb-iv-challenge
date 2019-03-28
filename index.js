const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile').development;

const db = knex(knexConfig);
const app = express();

app.use(helmet());
app.use(express.json());

//app.use(errors.defaultError);

app.listen(5000, () => console.log('port 5000'));