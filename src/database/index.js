const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Estudante = require('../models/Estudante');
const Veiculos = require('../models/Veiculo');
const Entrada = require('../models/Entrada');

const connection =  new Sequelize(configDB);

Estudante.init(connection);
Veiculos.init(connection);
Entrada.init(connection);

Estudante.associate(connection.models);
Veiculos.associate(connection.models);
Entrada.associate(connection.models);

module.exports = connection;