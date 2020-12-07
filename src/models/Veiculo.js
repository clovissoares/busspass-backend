const {Model, DataTypes} = require('sequelize');

class Veiculo extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize,
            tebleName: 'veiculos'
        })
    }

    static associate(models){
        this.hasMany(models.Entrada, {as: 'entradas'})
    }
}

module.exports = Veiculo;