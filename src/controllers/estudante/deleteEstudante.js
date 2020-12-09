const Estudante = require('../../models/Estudante');

async function deleteEstudante (req, res) {
    try{
        const estudante = await Estudante.destroy({where: {id: req.params.id}});
        
        return res.status(200).json(estudante);
    
    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = deleteEstudante;