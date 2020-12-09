const Veiculo = require('../../models/Veiculo');

async function getVeiculo (req, res) {
    try{
        const veiculo = await Veiculo.findByPk(req.params.id);

        if(!veiculo) throw (`Veiculo de id: ${req.params.id} não existe`);
        
        return res.status(200).json(veiculo);
    
    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = getVeiculo;