const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const Table = mongoose.model('Table', TableSchema);

module.exports = Table;
