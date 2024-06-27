import React, { useState, useEffect } from "react";
import axios from "axios";

const EditTaskButton = ({ taskId, onUpdate }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        // Fetch task data based on taskId
        const response = await axios.get(
          `http://localhost:8080/tmsapi/task/${taskId}`
        );
        console.log(response.data.data);
        setTask(response.data.data); // Set task data from API response
      } catch (error) {
        console.log("Error fetching task data");
      }
    };

    // Fetch task data when component mounts
    fetchTask();
  }, [taskId]);

  const handleEdit = () => {
    // Handle editing action (e.g., open modal or navigate to edit form)
    onUpdate(task); // Pass task data to parent component for editing
  };

  return <button onClick={handleEdit}>📝 Edit</button>;
};

export default EditTaskButton;
