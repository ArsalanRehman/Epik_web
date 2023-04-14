const pages = require('../models/pagesModel');

exports.getAllContent = async (req, res) => {
  try {
    const newContent = await pages.ContactUs.find();
    console.log(newContent);
    res.status(201).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.createContent = async (req, res) => {
  try {
    const newContent = await pages.ContactUs.create(req.body);
    console.log(newContent);
    res.status(201).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.getContentById = async (req, res) => {
  try {
    const newContent = await pages.ContactUs.findById(req.params.id);
    console.log(newContent);
    res.status(201).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.updateContent = async (req, res) => {
  try {
    const newContent = await pages.ContactUs.findById(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(newContent);
    res.status(201).json({
      status: 'success',
      data: newContent,
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const newContent = await pages.ContactUs.findByIdAndRemove(req.params.id);
    console.log(newContent);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};
