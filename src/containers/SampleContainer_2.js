import React from "react";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample"; //?/sample
import { connect } from "react-redux";

const { useEffect } = React; //??
const SampleContainer = ({
  getPost,
  getUsers,
  loadingPost,
  loadingUsers,
  post,
  users,
}) => {
  // useEffect(() => {
  //   getPost(1);
  //   getUsers(1);
  // }, [getPost, getUsers]);

  //*loading module 적용 + fail(에러)에 대한 상태관리
  //useEffect 에 파라미터로 넣는 함수는 async를 할 수 없기 때문에 그 내부에서 async 함수를 선언하고 호출
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(2);
        await getUsers(2);
      } catch (e) {
        console.log(e); //에러 조회
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
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
)(SampleContainer);
