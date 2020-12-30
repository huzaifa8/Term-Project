const { Task, taskSchema } = require('../models/task');

exports.getAddTask = (req, res, next) => {
  res.render('add-tasks', {
    pageTitle: 'Add Task',
    path: '/admin/add-task',
    editing: false
  });
};

exports.postAddTask = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;

  const task = new Task({
    title: title,
    description: description
  });

  await task.save();

  if (task) return res.status(200).redirect('/');
  else console.log('could not save task...');
};

exports.getEditTask = async (req, res, next) => {
  const taskId = req.params.id;
  const editMode = req.query.edit;

  if (!editMode) res.redirect('/');

  const task = await Task.findById(taskId);

  if (task)
    return res.status(200).render('add-tasks', {
      path: '/edit-task',
      pageTitle: 'Edit Task',
      task: task,
      editing: editMode
    });
  else console.log('Error could not edit task...');
};

exports.postEditTask = async (req, res, next) => {
  const taskId = req.body.taskId;

  const task = await Task.findById(taskId);

  task.title = req.body.title;
  task.description = req.body.description;

  await task.save();

  if (task) return res.status(200).redirect('/');
  else console.log('Error could not save task..');
};

exports.postDeleteTask = async (req, res, next) => {
  const taskId = req.params.id;

  const result = await Task.deleteOne({ _id: taskId });

  if (result.n > 0) return res.status(200).redirect('/');
  else console.log('Task was not deleted.');
};
