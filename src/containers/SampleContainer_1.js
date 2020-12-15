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
  useEffect(() => {
    getPost(2);
    getUsers(2);
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

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USER,
  }),
  { getPost, getUsers }
)(SampleContainer);
