/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Button from './Button'

const EmotionBox = styled.div`
  color: ${(props) => props.theme.color.secondary};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const EmotionBox2 = (props: any) => {
  const theme = useTheme();
  return <div css={{ color: theme.color.error }} {...props} />;
};

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Wrapper>
        <div css={(theme) => ({ color: theme.color.primary })}>
          Emotion Theme - primary
        </div>
        <EmotionBox>Emotion Theme - secondary</EmotionBox>
        <EmotionBox2>Emotion Theme - error </EmotionBox2>
        <br />
        <Button size="sm" variant="default">
          Default
        </Button>
        <Button size="md" variant="default">
          Default
        </Button>
        <Button size="lg" variant="default">
          Default
        </Button>
        <br />
        <Button size="sm" variant="danger">
          Danger
        </Button>
        <Button size="md" variant="danger">
          Danger
        </Button>
        <Button size="lg" variant="danger">
          Danger
        </Button>
        <br />
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="md" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
      </Wrapper>
    </div>
  );
}
