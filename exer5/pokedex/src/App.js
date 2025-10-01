import './App.css';
import { useEffect, useState } from 'react';
import PokemonDisplay from './components/PokemonDisplay';
import InfoMovesPanel from './components/InfoMovesPanel';
import TypeList from './components/TypeList';
import MoveList from './components/MoveList';


function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dex, setDex] = useState(1);
  const [page, setPage] = useState(0); // default stats page; 1 = moves

  const fetchPokemon = async (dex) => {
    setLoading(true)
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${dex}/`);
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
    if (dex > 0) {
      fetchPokemon(dex);
    }
  }, [dex])

  return (
    <div className="App items-center">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <div className="flex items-center justify-center gap-4 flex-wrap min-h-screen">

          <div className = "flex flex-col items-center ">
            <PokemonDisplay pokemon={pokemon} />


            <div className="flex items-center gap-2">
              <button className = "Arrow" onClick={() => setDex(dex - 1)}>
                ⬅️
              </button>
              <button className = "Arrow" onClick={() => setDex(dex + 1)}>
                ➡️
              </button>
            </div>
          
          <div>
              <TypeList className= "p-3 bg-gray-600" pokemon={pokemon} />
            </div>
          </div>

        <div className="flex flex-col max-w-md bg-gray-700 p-4 m-10">
          {page && (
            <div>
              <MoveList pokemon={pokemon} />
            </div>
          )}
          {!page && <div>
            <InfoMovesPanel pokemon={pokemon} />
          </div>}
          <div className = "flex-col gap-2">
              <button className = "InfoButton" onClick={() => setPage(0)}>
                Info
              </button>
              <button className = "InfoButton" onClick={() => setPage(1)}>
                Moves
              </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
