const Joi = require('joi');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

const joiTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required()
});

module.exports = {
  Task: mongoose.model('Task', taskSchema),
  taskSchema: joiTaskSchema
};
