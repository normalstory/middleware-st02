import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users, number }) => {
  return (
    <div>
      <section>
        <h1>포스트 : {number}.p</h1>

        {loadingPost && "로딩 중"}
        {number <= 0 && <h3>본문은 1 페이지부터 시작됩니다.</h3>}
        {number > 0 && !loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && "로딩 중"}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username}({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
