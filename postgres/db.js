const {Sequelize} = require('sequelize');
const { host, user, password, database, dialect } = require("./config.js");

const test_connection = async ()=>{
    const sequelize = db_connection();
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return sequelize;
}

const db_connection = ()=>{
    return new Sequelize(database ,user,password, {
        host: host,
        dialect: dialect,
    });
}

module.exports ={
    test_connection,
    db_connection
}

