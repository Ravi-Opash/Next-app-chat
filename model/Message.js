const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
});

module.exports = mongoose.models.message || mongoose.model('message', messageSchema);
