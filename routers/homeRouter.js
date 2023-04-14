const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router
  .route('/')
  .get(homeController.getAllHomePageContent)
  .post(homeController.createHomePageContent);

router
  .route('/:id')
  .get(homeController.getHomePageContentById)
  .patch(homeController.updateHomePageContent)
  .delete(homeController.deleteHomePageContent);

module.exports = router;
