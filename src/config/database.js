require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '78945685c',
    database: 'busspassDB',
    define: {
        timestamps:true,
        underscored: true
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};