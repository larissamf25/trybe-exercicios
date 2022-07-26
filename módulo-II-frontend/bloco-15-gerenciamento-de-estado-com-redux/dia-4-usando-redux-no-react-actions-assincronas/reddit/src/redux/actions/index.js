import { getReddit } from "../services/APIs";

export const REQUEST_ACTION = 'REQUEST_ACTION';
export const SUCCESS_ACTION = 'SUCCESS_ACTION';
export const FAILURE_ACTION = 'FAILURE_ACTION';

const requestAction = () => ({
  type: REQUEST_ACTION,
});

const successAction = (data) => ({
  type: SUCCESS_ACTION,
  data,
});

const failureAction = (error) => ({
  type: FAILURE_ACTION,
  error,
});

const fetchAPI = (type) => {
  return async (dispatch) => {
    dispatch(requestAction());
    try {
      const response = await getReddit(type);
      dispatch(successAction(response.children));
    } catch(error) {
      dispatch(failureAction(error));
    }
  }
};

export default fetchAPI;
