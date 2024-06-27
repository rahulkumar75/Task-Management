# Task Management Application

# Table of Contents
  1. Introduction
  2. Features
  3. Technology Stack
  4. Installation
  5. Usage
  6. API Endpoints
  7. Front-End Components
  8. Database Schema
  9. Future Enhancements
  10. Contributors

# Introduction
The Task Management Application is a simple yet effective tool that allows users to manage their tasks. Users can create new tasks, read existing ones, update task details, and delete tasks they no longer need. This project showcases proficiency in both front-end and back-end development.

# Features
1. Create Task: Add a new task with details such as title, description, and due date.
2. Read Task: View details of all tasks or a specific task.
3. Update Task: Modify details of an existing task.
4. Delete Task: Remove a task from the list.
5. User Authentication: Register and login to manage personal tasks (optional feature).

# Technology Stack
* Front-End:
Framework: React.js
Styling: CSS

* Back-End:
Framework: Node.js with Express.js
Database: MongoDB


# Installation
Prerequisites
* Node.js
* MongoDB

# Steps
1. Clone the Repository https://github.com/rahulkumar75/Task-Management.git
* cd Task-Management

2. Install Dependencies
* cd BackEnd
- npm install
* cd ../Frontend
- npm install

3. Configure Environment Variables
* Create a .env file in the server directory and add your MongoDB connection string and other environment variables.

4. Run the Application
* Start the back-end server:
- cd BackEnd
- npm start

* Start the front-end application:
cd ../Frontend
npm start

# Usage
1. Access the Application
* Open your web browser and navigate to http://localhost:1234.

2.Create a Task
* Click on the "Add Task" button.
* Fill in the task details and click "Save".

3.View Tasks
* The homepage will list all the tasks.

4.Update a Task
* Click on a task to view its details.
* Click on the "Edit" button, update the details, and click "Save".

5.Delete a Task
* Click on a task to view its details.
* Click on the "Delete" button.

# API Endpoints
* GET /tasks: Retrieve a list of all tasks.
* GET /tasks/: Retrieve a specific task by ID.
* POST /tasks: Create a new task.
* PUT /tasks/: Update an existing task by ID.
* DELETE /tasks/: Delete a task by ID.

# Front-End Components
* App: Main component that sets up routing.
* TaskList: Displays a list of tasks.
* TaskDetail: Displays details of a selected task.
* TaskForm: Form for creating or editing a task.

# Database Schema
* Task Collection
{
  "_id": "ObjectId",
  “createdAt”: “Date”,
  "title": "String",
  "description": "String",
  "dueDate": "Date",
  "status": "boolean"
}

# Future Enhancements
* User Authentication: Implement user registration and login.
* Task Categories: Allow users to categorize tasks.
* Task Prioritization: Add priority levels to tasks.

# Contributors
Name: Rahul Kumar
Feel free to reach out to me at rahulkumarx333@gmail.com.com for any questions or contributions.


