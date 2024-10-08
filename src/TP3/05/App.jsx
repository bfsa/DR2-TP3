import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  resetCount = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="counter">
        <DisplayCount count={this.state.count} />
        <div className="button-group">
          <button onClick={this.incrementCount}>Incrementar</button>
          <button onClick={this.resetCount} className="reset-button">Resetar</button>
        </div>
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
      <h1>Exercício 5 - Contador com Reset</h1>
      <Counter />
    </div>
  );
}