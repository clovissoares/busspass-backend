const Estudante = require('../../models/Estudante');

async function getListaEstudantes (req, res) {
    try{
        const {limite = 5, pagina = 1} = req.query;
        let estudante;

        if(limite <= 0) throw (`Limite: ${limite}, campo não pode ser menor ou igual a zero`);
        if(pagina < 1) throw(`Página: ${pagina}, campo não pode ser menor que um`);
        
        estudante = await Estudante.findAndCountAll({limit: limite, offset: pagina * limite - limite, distinct: true});

        if(pagina > Math.ceil(estudante.count/limite)){
            throw (`Página: ${pagina} não existe`);
        }

        return res.status(200).json(estudante);

    } catch (err){
        return res.status(400).json({error: `${err}`});

    }
}
    
module.exports = getListaEstudantes;