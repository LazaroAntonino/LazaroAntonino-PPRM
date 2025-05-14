export const initialStore = () => {
  return {
    all_characters_info: null,
    character_info: null,
    favourites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_all_characters':
      return {
        ...store,
        all_characters_info: action.payload
      };
    case 'set_favourite':
      const alreadyFav = store.favourites.some(elm => elm.id === action.payload.id);
      console.log('he entrado aquí, el action es: ', action.payload);
      return {
        ...store,
        favourites: alreadyFav
          ? store.favourites.filter(elm => elm.id !== action.payload.id)
          : [...store.favourites, action.payload],
      };

    case 'get_character_info':
      return {
        ...store,
        character_info: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
