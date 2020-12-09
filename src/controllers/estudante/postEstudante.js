const Estudante = require('../../models/Estudante');

async function postEstudante (req, res) {
    try{
        const {nome} = req.body;
        
        const estudante = await Estudante.create({nome});

        if(!estudante){throw ('Não foi possivel criar estudante')};

        return res.status(200).json(estudante);

    } catch (err){
        if(err.errors[0].type === 'unique violation'){
            return res.status(400).json({error: `${err.errors[0].path} já existe`});
        } else {
            return res.status(400).json({error: `${err}`});
        }
    }
}

module.exports = postEstudante;