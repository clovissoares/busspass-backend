const Veiculos = require('./veiculos');
const Estudantes = require('./estudantes');
const Entradas = require('./entradas');

module.exports = app => {
    app.use('/veiculos', Veiculos);
    app.use('/entradas', Entradas);
    app.use('/estudantes', Estudantes);
};