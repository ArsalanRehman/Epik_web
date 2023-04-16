const mongoose = require('mongoose');

const footerModel = mongoose.Schema({
  title: String,
  email: String,
  number: String,
  socials: mongoose.Schema.Types.Mixed,
});

const Footer = mongoose.model('Footer', footerModel, 'EpikWeb_Footer');

module.exports = Footer;
