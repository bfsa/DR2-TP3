import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementar = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="counter">
        <DisplayCount count={this.state.count} />
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

function DisplayCount({ count }) {
  return <p className="display-count">Contagem: {count}</p>;
}

export default function CounterApp() {
  return (
    <div className="counter-app">
      <h1>Exercício 4 - Contador + DisplayCount</h1>
      <Counter />
    </div>
  );
}