function VerdictSymbol({ verdict }) {
    const style = {
        TRUTHFUL: { color: 'green', fontWeight: 'bold' },
        AMBIGUOUS: { color: 'orange', fontWeight: 'bold' },
        MISLEADING: { color: 'red', fontWeight: 'bold' }
    }[verdict] || {};

    return <p style={style}>{verdict}</p>;
}

export default VerdictSymbol;
