import React from "react";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample"; //?/sample
import { connect } from "react-redux";
import { useSelector } from "react-redux"; //+my

const { useEffect } = React; //??
const SampleContainer = ({
  getPost,
  getUsers,
  loadingPost,
  loadingUsers,
  post,
  users,
}) => {
  const number = useSelector((state) => state.counter); //+my
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
    <Sample
      number={number} //+my
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
