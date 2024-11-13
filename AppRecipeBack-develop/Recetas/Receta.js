const mongoose = require('mongoose');

// Definir el esquema de la receta
const recetaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { collection: 'recetasUsuario' }); // Especificar el nombre de la colección

// Crear el modelo
const Receta = mongoose.model('Receta', recetaSchema);

module.exports = Receta;
