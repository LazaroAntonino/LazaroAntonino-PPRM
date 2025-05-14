const RickApiServices = {}

// RickApiServices.js
  RickApiServices.getAllCharacters= async (page = 1) => {
    try {
      const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log('Función --getAllCharacters-- algo no ha salido bien: ' + error);
    }
  }


RickApiServices.getCharacterInfo = async (id) => {
  try {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log('Función --getAllInfo-- algo no ha salido bien: ' + error)
  }
}

export default RickApiServices;
