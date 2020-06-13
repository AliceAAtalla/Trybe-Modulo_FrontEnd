import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="pokedex">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
