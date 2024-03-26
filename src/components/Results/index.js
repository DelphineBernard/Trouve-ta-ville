import { useState } from "react";
import Result from "./Result";
import formatData from "../utils/formatData.js";

const Results = ({results}) => {
    const [isFormatted, setIsFormatted] = useState(false)

    const handleResults = () => {
        if (!isFormatted){
            setIsFormatted(true)
        }
        else {
            setIsFormatted(false) 
        }  
    } 

    return (
        <div id="results">
            <div className="results-header">
                <h3>{results.length > 1 ? "Résultats" : "Résultat"}</h3>
                <button className="setResults" onClick={handleResults}>Changer le format</button>
            </div>
    
            {results.map(result => (
                <Result
                    key={result.code} 
                    name={result.nom} 
                    departement={result.departement}
                    code={result.code}
                    population={isFormatted ? formatData(result.population): result.population}
                />
            ))}
        </div>
    )
}

export default Results;