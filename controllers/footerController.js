const footer = require('../models/footerModel');

exports.getAllContent = async (req, res) => {
  try {
    const newContent = await footer.find();
    res.status(200).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      err,
    });
  }
};

exports.getlContentById = async (req, res) => {
  try {
    const newContent = await footer.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      err,
    });
  }
};
exports.createContent = async (req, res) => {
  try {
    const newContent = await footer.create(req.body);
    res.status(200).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      err,
    });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const newContent = await footer.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      err,
    });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const newContent = await footer.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      err,
    });
  }
};
