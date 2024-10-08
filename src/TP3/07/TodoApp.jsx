import React, { useState } from 'react';
import './TodoApp.css';

const INITIAL_TASKS = [
  { id: 1, text: "Estudar React", completed: false },
  { id: 2, text: "Fazer exercícios", completed: false },
  { id: 3, text: "Preparar o jantar", completed: false },
  { id: 4, text: "Ler um livro", completed: false },
  { id: 5, text: "Dormir cedo", completed: false }
];

function TodoItem({ task, onComplete }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <button onClick={() => onComplete(task.id)} disabled={task.completed}>
        {task.completed ? 'Concluído' : 'Concluir'}
      </button>
    </li>
  );
}

function TodoList({ tasks, onCompleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onComplete={onCompleteTask} />
      ))}
    </ul>
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

  return (
    <div className="todo-app">
      <h1>Exercício 7 - Lista de Tarefas</h1>
      <TodoList tasks={tasks} onCompleteTask={handleCompleteTask} />
    </div>
  );
}