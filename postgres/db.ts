import {Sequelize} from "sequelize";

const postgresDB = async (user_info: any, callback: Function)=>{
    const sequelize = new Sequelize('postgres',"postgres"," ", {
        host: 'localhost',
        dialect: 'postgres',
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default postgresDB;
