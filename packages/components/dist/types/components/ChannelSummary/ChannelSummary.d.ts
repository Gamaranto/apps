/// <reference types="react" />
import { ChannelSummaryStyleProps } from "./ChannelSummary.style";
declare type ChannelSummaryProps = {
    name: string;
    img?: string;
    description?: string;
    size?: "small" | "default" | "large";
    isPublic?: boolean;
    isVerified?: boolean;
    onClick?: any;
} & ChannelSummaryStyleProps;
export default function ChannelSummary({ isPublic, isVerified, description, size, name, img, onClick, ...styleProps }: ChannelSummaryProps): JSX.Element;
export {};
