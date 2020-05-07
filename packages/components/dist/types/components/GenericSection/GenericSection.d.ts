import React from "react";
import { SectionStyleProps } from "./GenericSection.style";
declare type SectionProps = {
    children?: React.ReactNode;
    title?: string;
    linkText?: string;
    className?: string;
    onLinkClick?: any;
} & SectionStyleProps;
export default function GenericSection({ children, title, linkText, className, onLinkClick, ...styleProps }: SectionProps): JSX.Element;
export {};
