const express = require('express');
const contactUsController = require('../controllers/contactUsController');
const router = express.Router();

router
  .route('/')
  .get(contactUsController.getAllContent)
  .post(contactUsController.createContent);

router
  .route('/:id')
  .get(contactUsController.getContentById)
  .patch(contactUsController.updateContent)
  .delete(contactUsController.deleteContent);

module.exports = router;
