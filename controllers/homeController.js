const pages = require('../models/pagesModel');

//HomePage
exports.getAllHomePageContent = async (req, res) => {
  try {
    const newContent = await pages.HomePage.find();
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
exports.createHomePageContent = async (req, res) => {
  try {
    const newContent = await pages.HomePage.create(req.body);
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

exports.getHomePageContentById = async (req, res) => {
  try {
    const newContent = await pages.HomePage.findById(req.params.id);
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

exports.updateHomePageContent = async (req, res) => {
  try {
    const newContent = await pages.HomePage.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
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

exports.deleteHomePageContent = async (req, res) => {
  try {
    const newContent = await pages.HomePage.findByIdAndRemove(req.params.id);
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
