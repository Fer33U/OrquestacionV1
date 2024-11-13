// Usuarios/usuarioController.js
const Usuario = require('./usuarioModel');
const bcrypt = require('bcryptjs'); // Importar bcrypt

// Lógica para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
    const { nombreUser, email, password } = req.body; // Extraer los nuevos campos

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de sal

        // Crear un nuevo usuario con la contraseña encriptada
        const nuevoUsuario = new Usuario({ 
            nombreUser, 
            email, 
            password: hashedPassword 
        });

        await nuevoUsuario.save(); // Guardar en la base de datos
        res.status(201).send({ 
            _id: nuevoUsuario._id, 
            nombreUser: nuevoUsuario.nombreUser, 
            email: nuevoUsuario.email,
            fechaRegistro: nuevoUsuario.fechaRegistro // No enviar la contraseña
        }); // Enviar respuesta sin la contraseña
    } catch (error) {
        res.status(400).send({ error: error.message }); // Manejar errores
    }
};

module.exports = { registrarUsuario }; // Exportar la función
