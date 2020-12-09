const Estudante = require('../../models/Estudante');

async function putEstudante (req, res) {
    try{ 
        if(Object.entries(req.body).length === 0 && req.body.constructor === Object){
            throw ('Não existe campos para atualizar')
        }

        if(req.body.id || req.body.createdAt || req.body.updatedAt){ 
            throw ('Não é possivel atualizar campos imutaveis (id, createdAt e updatedAt)');
        }
        
        const estudante = await Estudante.update(req.body, {returning: true, where: {id: req.params.id}});
        
        if(estudante[0] === 0) throw (`Estudante de id: ${req.params.id} não existe`);
        
        return res.status(200).json(estudante[1]);
    
    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = putEstudante;