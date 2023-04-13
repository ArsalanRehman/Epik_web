const product = require('../models/productModel');

//get already existed products
exports.getAllProducts = async (req, res) => {
  try {
    const newProduct = await product.find();

    res.status(201).json({
      status: 'success',
      data: {
        User: newProduct,
      },
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

//create product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        User: newProduct,
      },
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

//find product by id
exports.getProductByID = async (req, res) => {
  try {
    const newProduct = await product.findById(req.params.id);
    res.status(201).json({
      status: 'success',
      data: {
        User: newProduct,
      },
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

//update product
exports.updateProduct = async (req, res) => {
  try {
    const newProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 'success',
      data: {
        User: newProduct,
      },
    });
    // console.log('Update Req: ', req);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    deleted_product = null;
    deleted_product = await product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};
