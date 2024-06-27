import TaskCard from "./TaskCard";
function TaskList(taskList) {
  return (
    <div className="task-list-box">
      {taskList.taskList.length === 0
        ? "No any Task"
        : taskList.taskList.map((task, index) => <TaskCard t={task} />)}
    </div>
  );
}

export default TaskList;
