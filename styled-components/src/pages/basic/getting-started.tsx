import { NextPage } from "next";
import styled from "styled-components";

const GettingStartedPage: NextPage = () => {
  return (
    <>
      <pre>
        <code>
          {`
const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

const Wrapper = styled.section\`
  padding: 4em;
  background: papayawhip;
\`;
`}
        </code>
      </pre>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </>
  );
};

export default GettingStartedPage;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
