const Veiculo = require('../../models/Veiculo');

async function putVeiculo (req, res) {
    try{ 
        if(Object.entries(req.body).length === 0 && req.body.constructor === Object){
            throw ('Não existe campos para atualizar')
        }

        if(req.body.id || req.body.createdAt || req.body.updatedAt){ 
            throw ('Não é possivel atualizar campos imutaveis (id, createdAt e updatedAt)');
        }
        
        const veiculo = await Veiculo.update(req.body, {returning: true, where: {id: req.params.id}});
        
        if(veiculo[0] === 0) throw (`Estudante de id: ${req.params.id} não existe`);
        
        return res.status(200).json(veiculo[1]);
    
    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = putVeiculo;