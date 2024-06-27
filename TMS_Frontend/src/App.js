import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [error, setError] = useState(null);

  const showMeForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    fetch("http://localhost:8080/tmsapi/task/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTaskList(data.data.tasks);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <div className="container">
      <Header showMeForm={showMeForm} isFormVisible={isFormVisible} />
      {error === null ? (
        isFormVisible ? (
          <TaskForm showMeForm={showMeForm} isFormVisible={isFormVisible} />
        ) : taskList === null ? (
          <div>Cannot Load The Data</div>
        ) : (
          <TaskList taskList={taskList} />
        )
      ) : (
        <div>Failed To Fetch From Backend</div>
      )}
    </div>
  );
}

export default App;
