# ๐๏ธ React๋ฅผ Emotion์ ์ฌ์ฉํ์ฌ ์คํ์ผ๋งํ ์ฐ์ต ํ์ด์ง์๋๋ค.
:octocat: https://light9639.github.io/React-Emotion-Styling/

![light9639 github io_React-Emotion-Styling_](https://user-images.githubusercontent.com/95972251/212886381-9cfb65bd-b28f-4f22-a688-33b807a0e43b.png)

:sparkles: React๋ฅผ Emotion์ ์ฌ์ฉํ์ฌ ์คํ์ผ๋งํ ์ฐ์ต ํ์ด์ง์๋๋ค. :sparkles:
## :tada: React ํ๋ก์ ํธ ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ React ์ ํ, Typescirpt ์ ํํ๋ฉด ์์ฑ ์๋ฃ.
## ๐ธ emotion ์ค์น
- emotion ๋ฐ @emotion/react @emotion/styled ์ค์น ๋ช๋ น์ด
```bash
npm install emotion @emotion/react @emotion/styled
# or
yarn add emotion @emotion/react @emotion/styled
```

## โ๏ธ main.tsx, App.tsx, theme.ts, Button.tsx ์์  ๋ฐ ์์ฑ
### :zap: main.tsx
- `theme.ts` ์์ฑ ํ `import` ํ ๋ค `<ThemeProvider theme={theme}></ThemeProvider>`๋ก `<App />`์ ๊ฐ์ธ๋ฉด `theme`๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
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
- `emotion`์ ์ฌ์ฉํ๋ค ๋ณด๋ฉด ์๊ธฐ๋ ์ค๋ฅ๋ค์ `/** @jsxImportSource @emotion/react */` ์ ์๋จ์ ์ ์์ผ๋ก์จ ํด๊ฒฐ๋๋ค.
- `props`๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ๊ฐ์ ์์์ ๋ค๋ฅด๊ฒ ํ๋ค.
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
- `theme`๋ฅผ ๋ง๋ค๊ณ  `type` ์ง์ ์ ํ๋ ค๋ฉด `declare`์ ์์ฑํ๋ฉด ๋๋ค.
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
- `props` ์์ฑ์ ์ฌ์ฉํ์ฌ ๊ฐ ๋ฒํผ์ ๋ค๋ฅด๊ฒ ์ค์ ํ๋ค.
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
## ๐ ์ถ์ฒ
- <a href="https://www.daleseo.com/emotion/">Emotion์ผ๋ก React ์ปดํฌ๋ํธ ์คํ์ผํ๊ธฐ</a>
- <a href="https://tech.osci.kr/2022/06/14/%EC%9B%B9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%EC%97%90-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-with-emotion/">Emotion์ด๋ ๋ฌด์์ธ๊ฐ</a>
