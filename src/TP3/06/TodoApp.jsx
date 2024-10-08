import React from 'react';
import './TodoApp.css';

const TASKS = [
  "Estudar React",
  "Fazer exercícios",
  "Preparar o jantar",
  "Ler um livro",
  "Dormir cedo"
];

function TodoItem({ task }) {
  return <li className="todo-item">{task}</li>;
}

function TodoList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Exercício 6 - Lista de Tarefas</h1>
      <TodoList tasks={TASKS} />
    </div>
  );
}