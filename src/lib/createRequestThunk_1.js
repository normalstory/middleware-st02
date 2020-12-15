//thunk refactoring

export default function createRequestThunk(type, request) {
  const SUCESS = `${type}_SUCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (param) => async (dispatch) => {
    dispatch({ type }); //start
    try {
      const response = await request(param);
      dispatch({
        type: SUCESS,
        payload: response.data,
      }); //sucess
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); //error
      throw e;
    }
  };
}

//사용법 : createRequestThunk('GET_USERS', api.getUsers);
