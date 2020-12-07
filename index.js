const express = require('express');
const montarRotas = require('./src/routes');
const cors = require('cors');

const app = express();

require('dotenv').config();
require('./src/database');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

montarRotas(app);



PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}` );
});