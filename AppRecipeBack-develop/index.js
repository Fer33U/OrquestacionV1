const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar cors
const { registrarUsuario } = require('./Usuarios/registroUsuario'); // Importar el controlador
const { iniciarSesion } = require('./Usuarios/inicioUsuario'); // Importar la lógica de inicio de sesión
const { verificarToken, obtenerPerfilUsuario } = require('./Usuarios/perfilUsuario');
const { crearReceta } = require('./Recetas/CrearReceta');
const { obtenerRecetasUsuario, eliminarReceta  } = require('./Recetas/RecetasUsuario');


const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
const mongoURI = 'mongodb://mongo:27017/apprecipe'; // URI de conexión
mongoose.connect(mongoURI)
    .then(() => console.log('Conectado a la base de datos MongoDB...'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json()); // Para parsear JSON

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Rutas de usuarios
app.post('/usuarios', registrarUsuario);
app.post('/iniciar-sesion', iniciarSesion);
app.get('/perfil', verificarToken, obtenerPerfilUsuario);

// Ruta para crear una nueva receta
app.post('/recetas', verificarToken, crearReceta); // Requiere autenticación
app.get('/recetas', verificarToken, obtenerRecetasUsuario); //Ruta para obtener las recetas del usuario
app.delete('/recetas/:id', verificarToken, eliminarReceta); // Requiere autenticación y el id de la receta

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
