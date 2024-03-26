const SearchForm = ({getCities}) => {

    const handleSearch = (event) => {
        event.preventDefault()
        getCities(event.target[0].value)
    }

    return (
        <form onSubmit={handleSearch}>
            <label htmlFor="search">Nom de la commune</label>
            <div className="search-fonction">
                <input placeholder="Troyes, Bar-le-duc, Paris, ..." name="search" id="search"></input>
                <button>Lancer la recherche</button>
            </div>
            
        </form>
    )
}

export default SearchForm;