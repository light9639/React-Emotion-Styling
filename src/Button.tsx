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