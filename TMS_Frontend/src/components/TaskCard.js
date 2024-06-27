import { useState } from "react";
import axios from "axios";
import EditTaskForm from "./EditTaskForm";
import EditTaskButton from "./EditTaskButton";

function TaskCard(t) {
  const [editingTask, setEditingTask] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mess, setMess] = useState("");

  const handleUpdateTask = (task) => {
    setEditingTask(task); // Set the task being edited
  };

  const handleCancelEdit = () => {
    setEditingTask(null); // Reset editing state (close edit form)
  };

  //Date Formatter
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  //API Calling
  const markUpdate = async (id, mu) => {
    try {
      const response = await fetch(
        `http://localhost:8080/tmsapi/task/${id}/${mu}`,
        {
          method: "PATCH",
        }
      );
      setMess("Task Completed");
      window.location.reload();
    } catch (err) {
      console.log(err);
      setMess("Something is wrong");
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/tmsapi/task/${id}`, {
        method: "DELETE",
      });
      setMess("Task Deleted");
      window.location.reload();
    } catch (err) {
      console.log(err);
      setMess("Something is wrong");
    }
  };

  //Show/Hide Toggle
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {editingTask ? (
        <EditTaskForm task={editingTask} onCancel={handleCancelEdit} />
      ) : (
        <div className="task-card-box">
          <div className="main-text-box">
            <div className="text-box">
              <h2 className="task-title">
                Title : {t.t.title}
                {t.t.status ? "✅" : ""}
              </h2>
              <p className="task-date-status">
                <span>Due Date : {formatDate(t.t.dueDate)}</span>
                <span>〰️</span>
                <span>Status : {t.t.status ? "✅" : "⌛"}</span>
              </p>
            </div>

            <div className="action-btn-box">
              <button onClick={toggleVisibility}>
                {!isVisible ? "📖 Show" : "📖 Hide"}
              </button>
              {t.t.status ? (
                ""
              ) : (
                <EditTaskButton taskId={t.t._id} onUpdate={handleUpdateTask} />
                // <button id={t.t._id} onClick={() => editFrom(t.t.id)}>
                //   📝 Edit
                // </button>
              )}
              <button onClick={() => deleteTask(t.t._id)}>🗑️ Delete</button>
              {t.t.status ? (
                ""
              ) : (
                <button id={t.t._id} onClick={() => markUpdate(t.t._id, 1)}>
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
          {isVisible && <p>Description : {t.t.description}</p>}
        </div>
      )}
    </>
  );
}

export default TaskCard;
