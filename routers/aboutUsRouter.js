const express = require('express');
const aboutUsController = require('../controllers/aboutUsController');
const router = express.Router();

router
  .route('/')
  .get(aboutUsController.getAllContent)
  .post(aboutUsController.createContent);

router
  .route('/:id')
  .get(aboutUsController.getContentById)
  .patch(aboutUsController.updateContent)
  .delete(aboutUsController.deleteContent);

module.exports = router;
