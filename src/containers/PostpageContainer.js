import React, { useCallback } from "react";
import Postpage from "../components/Postpage";
import { getPost, getUsers } from "../modules/sample"; //?/sample
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter"; // redux-thunk를 위한 디스패치
//by hooks
import { useSelector, useDispatch } from "react-redux";

const { useEffect } = React; //??
const PostpageContainer = ({
  getPost,
  getUsers,
  loadingPost,
  loadingUsers,
  post,
  users,
}) => {
  const number = useSelector((state) => state.counter);
  const dispatcher = useDispatch();
  const callbackIncrease = useCallback(() => dispatcher(increaseAsync()), [
    dispatcher,
  ]);
  const callbackDecrease = useCallback(() => dispatcher(decreaseAsync()), [
    dispatcher,
  ]);
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(number); //+my
        await getUsers();
      } catch (e) {
        console.log(e); //에러 조회
      }
    };
    fn();
  }, [getPost, getUsers, number]);
  return (
    <Postpage
      number={number} //+my
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
      increments={callbackIncrease}
      decrements={callbackDecrease}
    />
  );
};
//loading module 적용
export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USER,
  }),
  { getPost, getUsers }
)(PostpageContainer);
