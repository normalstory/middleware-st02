import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//액션타입 선언, 한 액션당 3 set
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";

//thunk 함수 생성(내부에서는 시작, 성공, 실패때 - 다른 액션 디스패치)
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); //요청시작 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     }); //요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); //에러 발생
//     throw e; //나중에 컴포넌트에서 에러 조회 가능하도록 처리
//   }
// }; *리팩토링
export const getPost = createRequestThunk(GET_POST, api.getPost);

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USER });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USER_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USER_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// }; *리팩토링
export const getUsers = createRequestThunk(GET_USER, api.getUsers);

//초기상태
const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
