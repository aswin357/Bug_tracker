const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;
