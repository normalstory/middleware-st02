//thunk refactoring - loading module 적용
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type }); //로딩 start
    dispatch(startLoading(type)); //loading module
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); //*sucess
      dispatch(finishLoading(type)); //loading module
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); //*error
      dispatch(startLoading(type)); //loading module
      throw e;
    }
  };
}

//사용법 : createRequestThunk('GET_USERS', api.getUsers);
