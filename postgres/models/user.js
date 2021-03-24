const { Sequelize, DataTypes, Model } = require('sequelize');
const {db_connection} = require('../db')


const sequelize = db_connection();
class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name :{
        type: DataTypes.STRING,
        defaultValue: null,
    },
    last_name: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    company:{
        type: DataTypes.STRING,
        defaultValue: null,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        defaultValue: null,
    }
},{sequelize, modelName: 'User'});
User.sync({alter : true})
module.exports = {
    User,
}