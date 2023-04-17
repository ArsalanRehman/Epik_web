const express = require('express');
const imageController = require('./../controllers/imageController');
const multer = require('multer');

const upload = multer({
  storage: imageController.storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: imageController.fileFilter,
});

const router = express.Router();
router.get('/getImage/:path', imageController.getImage);

router.post(
  '/uploadImage',
  upload.single('productImage'),
  imageController.uploadImage
);

module.exports = router;
