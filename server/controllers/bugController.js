const Bug = require('../models/bugModel');

exports.createBug = async (req, res) => {
  const { title, description } = req.body;
  const bug = await Bug.create({ title, description });
  res.status(201).json(bug);
};

exports.getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

exports.updateBug = async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bug);
};

exports.deleteBug = async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bug deleted' });
};
