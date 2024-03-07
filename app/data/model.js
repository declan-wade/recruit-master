"use server"
import fs from "fs"
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('t34', 'sx7ac27ppt2076qdvt03', 'pscale_pw_glSoPPaToI2zGpSJpKD3MAdrhSUSOmZj8ZTWAO2Xaai', {host:'aws.connect.psdb.cloud', dialect: 'mysql', dialectModule: require('mysql2'), dialectOptions: { ssl: {ca: fs.readFileSync('./app/cacert.pem')}}, pool: {max: 5, min: 0, acquire: 30000, idle: 10000}, freezeTableName: true});

class Contact extends Model {}
Contact.init({
    ContactID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    FirstName: { type: DataTypes.STRING },
    LastName: { type: DataTypes.STRING },
    Email: { type: DataTypes.STRING },
    Phone: { type: DataTypes.STRING },
    Address: { type: DataTypes.STRING },
    DateTimeCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    DateTimeModified: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'contact' });

class Disciplines extends Model {}
Disciplines.init({
    DisciplineID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING },
    Description: { type: DataTypes.TEXT },
    DateTimeCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    DateTimeModified: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'disciplines' });

class Positions extends Model {}
Positions.init({
    PositionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING },
    OpeningDate: { type: DataTypes.DATEONLY },
    ClosingDate: { type: DataTypes.DATEONLY },
    Description: { type: DataTypes.TEXT },
    DisciplineID: { type: DataTypes.INTEGER },
    DateTimeCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    DateTimeModified: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'positions' });

class Applications extends Model {}
Applications.init({
    ApplicationID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ContactID: { type: DataTypes.INTEGER },
    PositionID: { type: DataTypes.INTEGER, unique: true },
    Status: { type: DataTypes.STRING },
    DateTimeCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    DateTimeModified: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'applications' });

// Associations
//Contact.hasMany(Applications, { foreignKey: 'ContactID' });
//Applications.belongsTo(Contact, { foreignKey: 'ContactID' });

//Positions.hasOne(Applications, { foreignKey: 'PositionID' });
//Applications.belongsTo(Positions, { foreignKey: 'PositionID' });

//Disciplines.hasMany(Positions, { foreignKey: 'DisciplineID' });
//Positions.belongsTo(Disciplines, { foreignKey: 'DisciplineID' });

// Synchronize all models with the database
//async function syncModels() {
 //   await sequelize.sync({ force: true });
//    console.log("All models were synchronized successfully.");
//}

//syncModels().catch(console.error);

module.exports = {Contact, Positions, Applications, Disciplines}