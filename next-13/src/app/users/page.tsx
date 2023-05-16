"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

function SearchUser({}: Props) {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername("");
    router.push(`/users/${username}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="ml-4">
        <input
          className="mr-4 px-4 py-2"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input your GitHubName"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-400 px-4 py-2 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchUser;
