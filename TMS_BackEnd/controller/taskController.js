const Task = require("./../models/taskModel");

//Creating a Task
exports.createTask = async (req, res) => {
  try {
    console.log(req.body);
    const newTask = await Task.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Serving All Tasks
exports.getAllTask = async (req, res) => {
  try {
    let query = Task.find();
    const tasks = await query;
    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
//Serving Task By Id
exports.getTaskById = async (req, res) => {
  try {
    const oneTask = await Task.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        oneTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
//Updating Task By Id
exports.updateTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
//Task Completeion
exports.completeTaskById = async (req, res) => {
  try {
    let obj = {};
    if (req.params.mark === "1") {
      obj = {
        status: true,
      };
    } else {
      obj = {
        status: false,
      };
    }
    console.log(obj);
    const task = await Task.findByIdAndUpdate(req.params.id, obj, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

//Delete Task By Id
exports.deleteTaskById = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
