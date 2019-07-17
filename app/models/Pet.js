const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  animal: {
    type: String,
    required: true
  },
  statusHealth: {
    type: String,
    enum: ['Vivo', 'Muerto', 'Desnutrido', 'Saludable'],
    default: 'Vivo',
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'Owner',
  }
}, {timestamps: true} );

module.exports = mongoose.model('Pet', petSchema);
