import Result from "./Result";

const Results = ({results}) => {

    return (
        <div id="results">
            <div className="results-header">
                <h3>{results.length > 1 ? "Résultats" : "Résultat"}</h3>
                <button className="setResults">Changer le format</button>
            </div>
    
            {results.map(result => (
                <Result
                    key={result.code} 
                    name={result.nom} 
                    code={result.code}
                    population={result.population}
                    departement={result.departement}
                />
            ))}
        </div>
    )
}

export default Results;