# 🖋️ React를 Emotion을 사용하여 스타일링한 연습 페이지입니다.
:octocat: https://light9639.github.io/React-Emotion-Styling/

![light9639 github io_React-Emotion-Styling_](https://user-images.githubusercontent.com/95972251/212886381-9cfb65bd-b28f-4f22-a688-33b807a0e43b.png)

:sparkles: React를 Emotion을 사용하여 스타일링한 연습 페이지입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt 선택하면 생성 완료.
## 🛸 emotion 설치
- emotion 및 @emotion/react @emotion/styled 설치 명령어
```bash
npm install emotion @emotion/react @emotion/styled
# or
yarn add emotion @emotion/react @emotion/styled
```

## ✒️ main.tsx, App.tsx, theme.ts, Button.tsx 수정 및 작성
### :zap: main.tsx
- theme.ts 생성 후 import 한 뒤 <ThemeProvider theme={theme}></ThemeProvider>로 <App />을 감싸면 theme를 사용할 수 있다.
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

### :zap: App.tsx
- emotion을 사용하다 보면 생기는 오류들은 `/** @jsxImportSource @emotion/react */` 을 상단에 적음으로써 해결된다.
- `props`를 사용하여 각각의 색상을 다르게 한다.
```js
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
```

### :zap: theme.tsx
- theme를 만들고 type 지정을 하려면 declare에 작성하면 된다.
```js
import { Theme } from "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        color: {
            secondary: string;
            primary: string;
            error: string;
        };
    }
}

const theme: Theme = {
    color: {
        secondary: "green",
        primary: "blue",
        error: "red"
    }
};

export default theme;
```

### :zap: Button.tsx
- props 속성을 사용하여 각 버튼을 다르게 설정한다.
```js
/** @jsxImportSource @emotion/react */
import React from "react";

const colors: any = {
    default: "rgb(36, 41, 47)",
    danger: "rgb(207, 34, 46)",
    outline: "rgb(9, 105, 218)"
};

const sizeStyles: any = {
    sm: {
        fontSize: "12px",
        padding: "3px 12px",
    },
    md: {
        fontSize: "14px",
        padding: "5px 16px",
    },
    lg: {
        fontSize: "16px",
        padding: "9px 20px",
    }
};

interface LayoutProps {
    children: React.ReactNode;
    size: string;
    variant: string;
}

export default function Button({ children, size = "md", variant = "default" }: LayoutProps): JSX.Element {
    return (
        <React.Fragment>
            <button
                css={{
                    borderRadius: "6px",
                    border: "1px solid rgba(27, 31, 36, 0.15)",
                    backgroundColor: "rgb(246, 248, 250)",
                    color: colors[variant],
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: "600",
                    lineHeight: "20px",
                    ...sizeStyles[size],
                    textAlign: "center",
                    cursor: "pointer",
                    appearance: "none",
                    userSelect: "none",
                    margin: "5px"
                }}
            >
                {children}
            </button>
        </React.Fragment>
    );
}
```
