
const PokemonDisplay = ({ pokemon }) => {
    if (!pokemon) {
        return null;
    }
    return (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      );
}

export default PokemonDisplay;