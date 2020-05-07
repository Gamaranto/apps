import React from "react";
import { SearchBarStyleProps } from "./SearchBar.style";
declare type SearchBarProps = {
    placeholder?: string;
    cta?: string | React.ReactNode;
    value: string;
    onSubmit?: (event: React.MouseEvent) => void;
    onChange?: (event: React.ChangeEvent) => void;
} & SearchBarStyleProps;
export default function SearchBar({ placeholder, value, onSubmit, onChange, cta, ...styleProps }: SearchBarProps): JSX.Element;
export {};
