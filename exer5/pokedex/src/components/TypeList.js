const TypeList = ({pokemon}) => {
    if (!pokemon) {
        return null;
    }
    return (
        <div>
            <p>
                Types: {pokemon.types.map(t => t.type.name).join(', ')}
            </p>
        </div>
    );
};

export default TypeList;