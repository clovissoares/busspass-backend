const {Model, DataTypes} = require('sequelize');

class Estudante extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize,
            tebleName: 'estudantes'
        })
    }

    static associate(models){
        this.hasMany(models.Entrada, {as: 'entradas'})
    }
}

module.exports = Estudante;