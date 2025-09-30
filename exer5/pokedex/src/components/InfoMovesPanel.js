const InfoMovesPanel = ({ pokemon }) => {
    if (!pokemon) {
        return (
            <div>Enter a Pokemon!</div>
        )
    }
    return (
        <div>
            <p>height: {pokemon.height}</p>
            <p>weight: {pokemon.weight}</p>
            <p>hp: {pokemon.stats.find(s => s.stat.name === "hp").base_stat}</p>
            <p>attack: {pokemon.stats.find(s => s.stat.name === "attack").base_stat}</p>
            <p>defense: {pokemon.stats.find(s => s.stat.name === "defense").base_stat}</p>
            <p>special-attack: {pokemon.stats.find(s => s.stat.name === "special-attack").base_stat}</p>
            <p>special-defense: {pokemon.stats.find(s => s.stat.name === "special-defense").base_stat}</p>
            <p>speed: {pokemon.stats.find(s => s.stat.name === "speed").base_stat}</p>
        </div>
    )
}

export default InfoMovesPanel;