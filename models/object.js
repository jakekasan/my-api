const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for locations
const GeoSchema = new Schema({
  type:{
    type: String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});

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
  },
  geometry: GeoSchema
});


const Object = mongoose.model('object',ObjectSchema);
const Geo = mongoose.model('object',ObjectSchema);

module.exports = Object;
