"use client";
import Link from "next/link";
import css from "styled-jsx/css";

const style = css`
  h1 {
    margin-left: 20px;
    font-weight: 800;
  }
  button {
    border: 0.2rem solid black;
    border-radius: 2rem;
    padding: rem;
  }
`;

export default function Home() {
  return (
    <main>
      <h1> 깃허브 프로필 검색하러 가실라우?</h1>
      <Link href="/users">
        <button>프로필 검색 클릭</button>
      </Link>
      <style jsx>{style}</style>
    </main>
  );
}
