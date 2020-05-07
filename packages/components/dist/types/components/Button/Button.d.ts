import React from "react";
import { ButtonStyleProps } from "./Button.style";
declare type ButtonProps = {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
} & ButtonStyleProps;
export default function Button({ children, className, onClick, ...styleProps }: ButtonProps): JSX.Element;
export {};
