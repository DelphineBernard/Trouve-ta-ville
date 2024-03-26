import SearchForm from "../SearchForm";
import Results from "../Results";
import { useEffect, useState } from "react";

const App = () => {

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCities = async (search) => {
        try {
            setIsLoading(true)
            const response = await fetch (`https://geo.api.gouv.fr/communes?nom=${search}&fields=code,nom,population,departement`)
            const data = await response.json()
            setResults(data)
            setIsLoading(false)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCities()}, [])

    return (
        <>
            <h1>Trouve ta ville</h1>
            <h2>Recherche par nom de commune</h2>
            <SearchForm getCities={getCities}/>
            {isLoading && <p className="message">Recherche en cours...</p>}
            {!isLoading && <Results results={results}/>}
        </>
    )
}

export default App;