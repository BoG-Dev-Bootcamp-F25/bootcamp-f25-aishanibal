import './App.css';
import { useEffect, useState } from 'react';
import PokemonDisplay from './components/PokemonDisplay';
import InfoMovesPanel from './components/InfoMovesPanel';
import TypeList from './components/TypeList';


function App() {
  const [pokemon, setPokemon] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("")
  
  const fetchPokemon = async (name) => {
    setLoading(true)
    try { 
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`); 
        const pokemonJSON = await res.json();
        setPokemon(pokemonJSON);
        if (!res.ok) {
            throw new Error(`Pokemon not found`)
        }
        setError("");
    } catch (e) {
        setPokemon(null);
        setError(e.message);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    if (inputVal){
      fetchPokemon(inputVal);
    }
  }, [inputVal])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bits of Good Mid-Semester Project</h1>
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)} // update as user types
        />
        <PokemonDisplay pokemon={pokemon} />
        <InfoMovesPanel pokemon={pokemon} />
        <TypeList pokemon={pokemon} />
      </header>
    </div>
  );
}

export default App;
