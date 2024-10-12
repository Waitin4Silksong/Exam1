import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3>{task.title} ({task.priority})</h3>
            <p>{task.description}</p>
            <p>{task.dateTime}</p>
            <p>Tags: {task.tags}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
