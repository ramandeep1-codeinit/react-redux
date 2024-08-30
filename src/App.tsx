import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux</h1>
        <AddTodo />
      <Todos />
      </header>
    </div>
  );
}

export default App;
