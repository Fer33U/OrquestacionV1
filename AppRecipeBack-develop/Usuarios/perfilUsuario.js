const jwt = require('jsonwebtoken');
const Usuario = require('./usuarioModel');

// Middleware para verificar el token
const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token correctamente
    if (!token) {
        return res.status(403).send({ error: 'Token no proporcionado' });
    }
    jwt.verify(token, 'tu_secreto', (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Token no válido' }); // Cambia el código de estado a 401
        }
        req.usuarioId = decoded.id; // Almacenar el ID del usuario
        next();
    });
};

// Obtener datos del perfil
const obtenerPerfilUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuarioId, 'nombreUser email');
        if (!usuario) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
        }
        res.send(usuario);
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener perfil de usuario' });
    }
};

module.exports = { verificarToken, obtenerPerfilUsuario };