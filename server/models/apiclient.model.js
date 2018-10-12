const mongoose = require('mongoose');

const ApiClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  apikey: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('ApiClient', ApiClientSchema);
