import { FAILURE_ACTION, REQUEST_ACTION, SUCCESS_ACTION } from "../actions";

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: '',
}

const firstReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case REQUEST_ACTION:
      return {...state, isLoading: true}
    case SUCCESS_ACTION:
      return {...state, isLoading: false, data: action.data};
    case FAILURE_ACTION:
      return {...state, isLoading: false, error: action.error}
    default:
      return state;
  }
}

export default firstReducer;
