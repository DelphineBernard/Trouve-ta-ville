import SearchForm from "../SearchForm";
import Results from "../Results";
import { useEffect, useState } from "react";

const App = () => {

    const [results, setResults] = useState([])

    const getCities = async (search) => {
        try {
            const response = await fetch (`https://geo.api.gouv.fr/communes?nom=${search}&fields=code,nom,population,departement`)
            const data = await response.json()
            setResults(data)
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
            <Results results={results}/>
        </>
    )
}

export default App;