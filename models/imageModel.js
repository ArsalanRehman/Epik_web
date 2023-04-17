const mongoose = require('mongoose');

const imageModel = mongoose.Schema({
  path: {
    type: String,
  },
  type: {
    type: String,
  },
  link: {
    type: String,
  },
  Date: Date,
});
const Picture = mongoose.model('Picture', imageModel, 'EpikWeb_Images');
module.exports = Picture;
