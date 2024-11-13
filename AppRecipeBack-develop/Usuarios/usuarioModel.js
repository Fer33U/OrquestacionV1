// Usuarios/usuarioModel.js
const mongoose = require('mongoose');

// Definir el esquema para usuarios
const usuarioSchema = new mongoose.Schema({
    nombreUser: { type: String, required: true },  // Campo para el nombre de usuario
    email: { type: String, required: true, unique: true },  // Campo para el email
    password: { type: String, required: true },  // Campo para la contraseña
    fechaRegistro: { type: Date, default: Date.now }  // Campo para la fecha de registro
});

// Crear el modelo para usuarios
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario; // Exportar el modelo
