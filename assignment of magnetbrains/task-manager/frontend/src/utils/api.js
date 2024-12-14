// src/utils/api.js

// src/utils/api.js

const API_URL = 'http://localhost:5000';  // Replace with your backend API URL

// Functions to interact with your backend
export const fetchTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Default export (optional)
const axiosInstance = {
  fetchTasks,
  createTask,
};

export default axiosInstance;
