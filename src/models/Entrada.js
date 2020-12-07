const {Model, DataTypes} = require('sequelize');

class Entrada extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize,
            tebleName: 'entradas'
        })
    }

    static associate(models){
        this.belongsTo(models.Estudante, {foreignKey: 'estudante_id', as: 'estudantes'})
        this.belongsTo(models.Veiculo, {foreignKey: 'veiculo_id', as: 'veiculos'})
    }
}

module.exports = Entrada;