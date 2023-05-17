"use client";
import Link from "next/link";
import { styled } from "styled-components";
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
    margin: 0rem 3rem;
  }
`;

const SearchGitProfile = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export default function Home() {
  return (
    <SearchGitProfile>
      <h1>깃허브 프로필 검색하러 가실라우?</h1>
      <Link href="/users">
        <button>프로필 검색 클릭</button>
      </Link>
      <style jsx>{style}</style>
    </SearchGitProfile>
  );
}
