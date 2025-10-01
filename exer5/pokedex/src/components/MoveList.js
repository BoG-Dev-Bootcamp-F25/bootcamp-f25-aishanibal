const MoveList = ({pokemon}) => {
    if (!pokemon) {
        return null;
    }
    return (
        <div>
            <p>{pokemon.moves.map(m => m.move.name).join(', ')}</p>
        </div>
    );
}

export default MoveList;