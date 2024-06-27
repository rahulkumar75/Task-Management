import React, { useState } from "react";
import axios from "axios";

const EditTaskForm = ({ task, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task.oneTask);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage("");

    try {
      // Update existing task data using PUT request
      const response = await axios.patch(
        `http://localhost:8080/tmsapi/task/${task.oneTask._id}`,
        editedTask
      );
      setMessage(response.data.message);
      onCancel(); // Close edit form after successful update
    } catch (err) {
      setError("Error updating task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Task</h2>
      <form className="taskForm" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={editedTask.description}
          onChange={handleChange}
          required
        />

        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={editedTask.dueDate}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
        <button type="button" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditTaskForm;
