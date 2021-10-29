import './App.css';
import Pokedex from './componentes/pokedex';
import pokemons from './data';

function App() {
  return (
    <div>
       <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
