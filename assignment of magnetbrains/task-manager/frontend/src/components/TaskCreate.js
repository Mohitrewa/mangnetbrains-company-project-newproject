import React, { useState } from 'react';
import axios from 'axios';

const TaskCreate = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    due_date: '',
    priority: 'low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/tasks/', task)
      .then(response => {
        alert('Task created!');
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={task.title} onChange={handleChange} required />
        
        <label>Description:</label>
        <textarea name="description" value={task.description} onChange={handleChange} required />
        
        <label>Due Date:</label>
        <input type="date" name="due_date" value={task.due_date} onChange={handleChange} required />
        
        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskCreate;
