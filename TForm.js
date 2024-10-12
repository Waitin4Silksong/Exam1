import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: '',
    dateTime: '',
    description: '',
    tags: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', dateTime: '', description: '', tags: '', priority: 'Low' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add Task</h2>
      <input name="title" placeholder="Task Title" value={task.title} onChange={handleChange} required />
      <input name="dateTime" type="datetime-local" value={task.dateTime} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <input name="tags" placeholder="Tags" value={task.tags} onChange={handleChange} />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
