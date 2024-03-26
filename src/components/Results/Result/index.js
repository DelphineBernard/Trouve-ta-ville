const Result = ({name, code, population, departement}) => {
    return (
        <div className="result">
            <p><strong>{name}</strong> - {departement.code}</p>
            <p><span>Code Postal : </span>{code}</p>
            <p><span>Population : </span>{population}</p>
        </div>
    )
}

export default Result;