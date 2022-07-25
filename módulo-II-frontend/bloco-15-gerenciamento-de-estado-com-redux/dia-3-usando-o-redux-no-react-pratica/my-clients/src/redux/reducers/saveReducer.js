const INITIAL_STATE = [];

const saveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'save':
      return [
        ...state,
        {
          nome: action.nome,
          idade: action.idade,
          email: action.email,
        }
      ];
    default: return state;
  }
}

export default saveReducer;
