const { Schema, model } = require('mongoose');

const daysSchema = new Schema({
  motivo: String,
  tipo: String,
  info: String,
  dia: Number,
  mes: Number,
  id: {
    type: String,
    unique: true,
  }
}, {
  timestamps: true
});

module.exports = model('Days', daysSchema);