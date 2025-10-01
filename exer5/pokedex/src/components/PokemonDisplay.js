
const PokemonDisplay = ({ pokemon }) => {
    if (!pokemon) {
        return <div className = ""></div>;
    }
    return (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-72 h-72 bg-gray-700 mb-4" />
          <h2 className = "bg-gray-500">{pokemon.name}</h2>
        </div>
      );
}

export default PokemonDisplay;