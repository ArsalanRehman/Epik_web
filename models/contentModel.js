const mongoose = require('mongoose');

const contentModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    content: {
      type: String,
    },
    page: {
      type: String,
    },
  },
  { collection: 'EpikWeb_Content' }
);

Content = mongoose.model('Content', contentModel);
module.exports = Content;
