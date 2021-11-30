const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const updateSchema = new Schema({
  project: {
    type: String,
    required: true,
    trim: true,
  },
  version: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 80,
  },
  update: [String],
});

const { statics, methods } = updateSchema;

statics.createOne = async function (data) {
  return await this.create(data);
};

module.exports = new mongoose.model('update', updateSchema);
