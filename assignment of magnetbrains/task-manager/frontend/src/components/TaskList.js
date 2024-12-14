import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await api.get('/tasks');
                setTasks(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map(task => (
                <div key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
