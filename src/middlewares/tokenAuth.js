const jwt = require('jsonwebtoken');
require('dotenv').config();

function tokenAuth (req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Não existe token.' });
    
    const segredo = process.env.JWT_SECRET_KEY;

    jwt.verify(token, segredo, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' });
      
      req.userId = decoded.id;
      req.permission = decoded.permission;
      
      next();
    });
}

module.exports = tokenAuth;