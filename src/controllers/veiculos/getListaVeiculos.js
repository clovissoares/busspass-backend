const Veiculo = require('../../models/Veiculo');

async function getListaVeiculos (req, res) {
    try{
        const {limite = 5, pagina = 1} = req.query;
        let veiculo;

        if(limite <= 0) throw (`Limite: ${limite}, campo não pode ser menor ou igual a zero`);
        if(pagina < 1) throw(`Página: ${pagina}, campo não pode ser menor que um`);
        
        veiculo = await Veiculo.findAndCountAll({limit: limite, offset: pagina * limite - limite, distinct: true});

        if(pagina > Math.ceil(veiculo.count/limite)){
            throw (`Página: ${pagina} não existe`);
        }

        return res.status(200).json(veiculo);

    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}

module.exports = getListaVeiculos;