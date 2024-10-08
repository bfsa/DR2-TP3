import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="counter">
        <p>Contagem: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}

export default function CounterApp() {
  return (
    <div className="counter-app">
      <h1>Exercício 2 - Contador</h1>
      <Counter />
    </div>
  );
}