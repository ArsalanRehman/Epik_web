const mongoose = require('mongoose');

const productModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    properties: {
      type: mongoose.Schema.Types.Mixed,
    },
    specifications: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { collection: 'EpikWeb_Products' }
);

const Product = mongoose.model('Product', productModel);

module.exports = Product;
