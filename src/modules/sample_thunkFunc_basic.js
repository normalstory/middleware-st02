import { handleActions } from "redux-actions";
import * as api from "../lib/api";

//액션타입 선언, 한 액션당 3 set
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER_FAILURE";

//thunk 함수 생성(내부에서는 시작, 성공, 실패때 - 다른 액션 디스패치)
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); //요청시작 알림
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }); //요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }); //에러 발생
    throw e; //나중에 컴포넌트에서 에러 조회 가능하도록 처리
  }
};
export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

//초기상태
const initialState = {
  loading: {
    GET_POST: false,
    GET_USER: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true, //요청 시작
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //요청 완료
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //요청 완료
      },
    }),
    [GET_USER]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: true, //요청 시작
      },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: false, //요청 완료
      },
      users: action.payload,
    }),
    [GET_USER_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: false, //요청 완료
      },
    }),
  },
  initialState
);

export default sample;
