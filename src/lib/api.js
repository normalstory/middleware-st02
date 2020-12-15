/** redux-thunk for 비동기 작업요청 샘플링 */

import axios from "axios";

export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
