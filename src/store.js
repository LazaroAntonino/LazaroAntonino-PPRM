export const initialStore=()=>{
  return{
    all_characters_info: null,
    character_info: null
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_all_characters':
      return {
        ...store,
        all_characters_info: action.payload
      };
    case 'get_character_info':
      return {
        ...store,
        character_info: action.payload
      }
    default:
      throw Error('Unknown action.');
  }    
}
