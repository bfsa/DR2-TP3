import React from 'react';

const NAMES = [
  { name: "Fulano", age: 25 },
  { name: "Ciclano", age: 30 },
  { name: "Beltrano", age: 40 },
  { name: "Maria", age: 35 },
  { name: "José", age: 28 }
];

export default function GreetingApp() {
  return (
    <div className="greeting-container">
      <h1>Exercício 3 - Saudações com Idade</h1>
      {NAMES.map((person) => (
        <Greeting key={person.name} name={person.name} age={person.age} />
      ))}
    </div>
  );
}

function Greeting({ name, age }) {
  return (
    <p className="greeting">
      Olá, {name}! Você tem {age} anos.
    </p>
  );
}