import React from "react";
import { GridStyleProps } from "./Grid.style";
declare type SectionProps = {
    items?: React.ReactNode[];
    className?: string;
} & GridStyleProps;
export default function Grid({ items, className, ...styleProps }: SectionProps): JSX.Element;
export {};
