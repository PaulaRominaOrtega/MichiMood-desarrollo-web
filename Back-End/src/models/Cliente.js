// src/models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const Cliente = sequelize.define('Cliente', {
    cuit: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaAlta: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

export default Cliente;