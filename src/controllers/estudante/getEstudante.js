const Estudante = require('../../models/Estudante');

async function getEstudante (req, res) {
    try{
        const estudante = await Estudante.findByPk(req.params.id);

        if(!estudante) throw (`Estudante de id: ${req.params.id} não existe`);
        
        return res.status(200).json(estudante);
    
    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = getEstudante;