const express = require('express');
const QuequesController = require('./controllers/QuequesController');

const routes = express.Router();

routes.post('/', QuequesController.store);

module.exports = routes;