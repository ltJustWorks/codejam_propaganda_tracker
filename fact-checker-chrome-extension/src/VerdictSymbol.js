function VerdictSymbol({ verdict }) {
    const style = {
        TRUTHFUL: { color: 'green', fontWeight: 'bold' },
        AMBIGUOUS: { color: 'orange', fontWeight: 'bold' },
        UNTRUTHFUL: { color: 'red', fontWeight: 'bold' }
    }[verdict] || {};

    return <p style={style}>verdict</p>;
}

export default VerdictSymbol;
