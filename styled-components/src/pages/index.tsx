import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <h1>Styled-Components Example</h1>
      <Link href="/basic">basic</Link>
    </main>
  );
}

const Container = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;

  gap: 20px;
`;
