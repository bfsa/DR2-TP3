import React from 'react';

const NAMES = ["Fulano", "Ciclano", "Beltrano", "Maria", "José"];

export default function App() {
  return (
    <div className="greeting-container">
      <h1>Exercício 1 - Saudações</h1>
      {NAMES.map((name) => (
        <Greeting key={name} name={name} />
      ))}
    </div>
  );
}

function Greeting({ name }) {
  return <p className="greeting">Olá, {name}!</p>;
}