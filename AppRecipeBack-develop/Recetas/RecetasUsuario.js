const Receta = require('./Receta'); // Ajusta la ruta si es necesario

// Obtener recetas de un usuario específico
const obtenerRecetasUsuario = async (req, res) => {
  try {
    const userId = req.usuarioId; // Obtener el id del usuario desde el middleware

    // Buscar las recetas del usuario en la base de datos
    const recetas = await Receta.find({ userId }); // Filtrar recetas por userId

    // Si no se encuentran recetas, responder con un mensaje
    if (recetas.length === 0) {
      return res.status(404).send({ message: 'No se encontraron recetas para este usuario' });
    }

    // Enviar las recetas encontradas
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las recetas del usuario', error });
  }
};

// Eliminar una receta del usuario específico
const eliminarReceta = async (req, res) => {
    try {
      const userId = req.usuarioId; // Obtener el id del usuario desde el middleware
      const recetaId = req.params.id; // Obtener el id de la receta desde los parámetros de la URL
  
      // Buscar y eliminar la receta por userId y recetaId
      const recetaEliminada = await Receta.findOneAndDelete({ _id: recetaId, userId });
  
      // Si no se encuentra la receta, responder con un mensaje
      if (!recetaEliminada) {
        return res.status(404).send({ message: 'Receta no encontrada o no pertenece a este usuario' });
      }
  
      // Enviar un mensaje de éxito
      res.status(200).send({ message: 'Receta eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la receta', error });
    }
  };
  
  module.exports = { obtenerRecetasUsuario, eliminarReceta };
