const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the object Schema and model
const ObjectSchema = new Schema({
  name: {
    type: String,
    required: [true,'Name property is required']
  },
  profession: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
});

const Object = mongoose.model('object',ObjectSchema);

module.exports = Object;
