const formatData = (population) => {
    if (population >= 1000000){
        return (`${(Math.round(population) / 1000000).toFixed(2)} M`).replace(".", ",")
    } else if (population >= 1000){
        return (`${(Math.round(population) / 1000).toFixed(2)} K`).replace(".", ",")
    }
    return population
    // if (formatted){
    //     return !formatted
    // }
    // else {
    //     return formatted
    // }
}

export default formatData;