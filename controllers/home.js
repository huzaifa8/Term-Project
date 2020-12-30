const { Task } = require('../models/task');

exports.getHomePage = async (req, res, next) => {
  const tasks = await Task.find();

  if (tasks)
    return res.render('index', {
      pageTitle: 'Tasks',
      path: '/',
      tasks: tasks
    });
  else return res.status(400).send('error');
};

exports.getTaskDetails = async (req, res, next) => {
  const taskId = req.params.id;

  const task = await Task.findById(taskId);

  if (task)
    return res.status(200).render('task-detail', {
      path: '/task',
      pageTitle: 'Task Details',
      task: task
    });
  else return res.status(400).send('Could not get task...');
};
