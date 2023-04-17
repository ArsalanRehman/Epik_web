const express = require('express');
const footerController = require('../controllers/footerController');
const router = express.Router();

router
  .route('/')
  .get(footerController.getAllContent)
  .post(footerController.createContent);

router
  .route('/:id')
  .get(footerController.getlContentById)
  .patch(footerController.updateContent)
  .delete(footerController.deleteContent);

module.exports = router;
