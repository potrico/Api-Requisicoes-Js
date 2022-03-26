const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');

// aqui vão todos os endpoints possíveis para o programa
routes.route('/colaboradores').get(controle.listar);

module.exports = routes;