import { NextPage } from "next";
import styled from "styled-components";

const ReversedButton = (props: any) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const ExtendingStylesPage: NextPage = () => {
  return (
    <>
      <pre>
        <code>
          {`
const Button = styled.button\`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
\`;

const TomatoButton = styled(Button)\`
  color: tomato;
  border-color: tomato;
\`;
        `}
        </code>
      </pre>
      <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </div>

      <pre>
        <code>
          {`
<div>
  <Button as="a" href="#">Link with Button styles</Button>
  <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
</div>
          `}
        </code>
      </pre>
      <div>
        <Button as="a" href="#">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="#">
          Link with Tomato Button styles
        </TomatoButton>
      </div>

      <pre>
        <code>
          {`
const ReversedButton = (props: any) => <Button {...props} children={props.children.split('').reverse()} />

<Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
          `}
        </code>
      </pre>
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
    </>
  );
};

export default ExtendingStylesPage;

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
