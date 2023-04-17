const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  category: String,
  heading: String,
  content: String,
});

const HomePage = mongoose.model('HomePage', pageSchema, 'EpikWeb_HomePage');
const AboutUs = mongoose.model('AboutUs', pageSchema, 'EpikWeb_AboutUs');
const ContactUs = mongoose.model('ContactUs', pageSchema, 'EpikWeb_ContactUs');

module.exports = { HomePage, AboutUs, ContactUs };
