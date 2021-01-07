const {Sequelize} = require('sequelize');

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
    return new Sequelize('postgres',"postgres"," ", {
        host: 'localhost',
        dialect: 'postgres',
    });
}

module.exports ={
    test_connection,
    db_connection
}

