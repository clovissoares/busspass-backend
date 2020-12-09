const Veiculo = require('../../models/Veiculo');

async function postVeiculo (req, res) {
    try{
        const {nome} = req.body;
        
        const veiculo = await Veiculo.create({nome});

        if(!veiculo){throw ('Não foi possivel criar veiculo')};

        return res.status(200).json(veiculo);

    } catch (err){
        if(err.errors[0].type === 'unique violation'){
            return res.status(400).json({error: `${err.errors[0].path} já existe`});
        } else {
            return res.status(400).json({error: `${err}`});
        }
    }
}

module.exports = postVeiculo;