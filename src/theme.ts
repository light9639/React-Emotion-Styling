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
