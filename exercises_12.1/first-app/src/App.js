import React from 'react';
import './App.css';

const compromissos = ['Acordar', 'Tomar Café', 'Tomar Banho', 'Trabalhar']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = compromissos.map(tarefa => task(tarefa))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {tarefas}
        </p>
      </header>
    </div>
  );
}

export default App;
