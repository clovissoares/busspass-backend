'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entradas', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        estudante_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'estudantes', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        onibus_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'veiculos', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('entradas');
  }
};