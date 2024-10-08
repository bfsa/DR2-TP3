import React, { useState } from 'react';
import './TodoApp.css';

const INITIAL_TASKS = [
  { id: 1, text: "Estudar React", completed: false },
  { id: 2, text: "Fazer exercícios", completed: false },
  { id: 3, text: "Preparar o jantar", completed: false }
];

function TodoItem({ task, onComplete, onDelete }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="todo-item-buttons">
        <button onClick={() => onComplete(task.id)} disabled={task.completed}>
          {task.completed ? 'Concluído' : 'Concluir'}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-button">
          Excluir
        </button>
      </div>
    </li>
  );
}

function TodoList({ tasks, onCompleteTask, onAddTask, onDeleteTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            task={task} 
            onComplete={onCompleteTask} 
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      
    </div>
  );
}

export default function TodoApp() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleCompleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="todo-app">
      <h1>Lista de Tarefas</h1>
      <TodoList 
        tasks={tasks} 
        onCompleteTask={handleCompleteTask} 
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}