const Receta = require('./Receta');

// Controlador para crear una receta
const crearReceta = async (req, res) => {
  try {
    const { title, ingredients, instructions, imageUrl } = req.body;

    // Obtener el ID del usuario autenticado (debe ser extraído del token en el middleware de autenticación)
    const userId = req.usuarioId; // Aquí se usa el usuarioId proporcionado por el middleware verificarToken

    const nuevaReceta = new Receta({
      title,
      ingredients,
      instructions,
      imageUrl,
      userId
    });

    await nuevaReceta.save();
    res.status(201).json({ message: 'Receta creada con éxito', receta: nuevaReceta });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la receta', error });
  }
};

module.exports = { crearReceta };
