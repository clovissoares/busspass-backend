const Veiculo = require('../../models/Veiculo');

async function deleteVeiculo (req, res) {
    try{
        const veiculo = await Veiculo.destroy({where: {id: req.params.id}});
        
        return res.status(200).json(veiculo);
    
    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = deleteVeiculo; 