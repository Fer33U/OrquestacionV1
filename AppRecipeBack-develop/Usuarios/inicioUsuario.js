const jwt = require('jsonwebtoken'); // Importar jsonwebtoken
const Usuario = require('./usuarioModel');
const bcrypt = require('bcryptjs');

// Lógica para iniciar sesión
const iniciarSesion = async (req, res) => {
    const { usernameOrEmail, password } = req.body; // Cambia a usernameOrEmail

    try {
        const usuario = await Usuario.findOne({
            $or: [{ email: usernameOrEmail }, { nombreUser: usernameOrEmail }] // Utiliza usernameOrEmail
        });

        if (!usuario) {
            return res.status(401).send({ error: 'Credenciales inválidas' });
        }

        const esCoincidente = await bcrypt.compare(password, usuario.password);
        if (!esCoincidente) {
            return res.status(401).send({ error: 'Credenciales inválidas' });
        }

        // Generar un token
        const token = jwt.sign({ id: usuario._id, nombreUser: usuario.nombreUser }, 'tu_secreto', { expiresIn: '1h' });

        // Devolver el token y los datos del usuario
        res.send({
            token,
            usuario: {
                _id: usuario._id,
                nombreUser: usuario.nombreUser,
                email: usuario.email
            }
        });
    } catch (error) {
        res.status(500).send({ error: 'Error al iniciar sesión' });
    }
};


module.exports = { iniciarSesion };