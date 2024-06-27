import { useState } from "react";
import axios from "axios";
function TaskForm({ showMeForm }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/tmsapi/task/",
        formData
      );
      showMeForm();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <form className="taskForm" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          row="4"
          required
        />

        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />

        <button type="Create Task">Submit</button>
      </form>
    </div>
  );
}

export default TaskForm;
