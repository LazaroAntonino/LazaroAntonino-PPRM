const RickApiServices = {}

RickApiServices.getAllCharacters = async () => {
    try {
        const resp = await fetch('https://rickandmortyapi.com/api/character')
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log('Función --getAllInfo-- algo no ha salido bien: ' + error)
    }
}

RickApiServices.getCharacterInfo = async (id)=> {
    try {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log('Función --getAllInfo-- algo no ha salido bien: ' + error)
    }
}

RickApiServices.getAll

export default RickApiServices;
