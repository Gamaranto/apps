/// <reference types="react" />
import { TagStyleProps } from "./Tag.style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
declare type TagProps = {
    icon?: IconProp;
    text?: string;
} & TagStyleProps;
export default function Tag({ icon, text, ...styleProps }: TagProps): JSX.Element;
export {};
