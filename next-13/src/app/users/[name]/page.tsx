import React from "react";
// import Image from "next/image";

type Props = {
  params: {
    name: string;
  };
};

const fetchUserName = async (name: string) => {
  const result = await fetch(`https://api.github.com/users/${name}`);
  const user: UserType = await result.json();
  return user;
};

async function TodoId({ params: { name } }: Props) {
  const user = await fetchUserName(name);
  return (
    <div className="bg-slate-300 space-y-2 p-2 border-4 border-blue-400">
      <img src={user.avatar_url} />
      <div>유저 로그인 : {user.login}</div>
      <div>유저 이름 : {user.name}</div>
      <div>유저 설명 : {user.bio}</div>
    </div>
  );
}

export default TodoId;

// 데이터 나오는 것까지는 확인
