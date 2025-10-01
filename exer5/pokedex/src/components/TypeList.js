const TypeList = ({pokemon}) => {
    if (!pokemon) {
        return null;
    }
    return (
        <div>
            <p className = "p-3 bg-gray-600">
                Types: {pokemon.types.map(t => t.type.name).join(', ')}
            </p>
        </div>
    );
};

export default TypeList;