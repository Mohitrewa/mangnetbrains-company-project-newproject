import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import PriorityList from './components/PriorityList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the API (mock or real API)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks'); // API endpoint to fetch tasks
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Update task priority
  const updateTaskPriority = (taskId, newPriority) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, priority: newPriority } : task
    ));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/tasks" 
          element={<TaskList tasks={tasks} />} 
        />
        <Route 
          path="/tasks/create" 
          element={<TaskForm onSubmit={addTask} />} 
        />
        <Route 
          path="/tasks/:id" 
          element={<TaskDetails />} // No tasks prop passed, TaskDetails now fetches task by ID
        />
        <Route 
          path="/priority" 
          element={<PriorityList tasks={tasks} updateTaskPriority={updateTaskPriority} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
