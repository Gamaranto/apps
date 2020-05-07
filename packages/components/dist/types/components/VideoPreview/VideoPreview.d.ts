/// <reference types="react" />
import { VideoPreviewStyleProps } from "./VideoPreview.styles";
declare type VideoPreviewProps = {
    title: string;
    channel?: string;
    channelImg?: string;
    showChannel?: boolean;
    poster?: string;
    onClick?: any;
    onChannelClick?: any;
} & VideoPreviewStyleProps;
export default function VideoPreview({ title, channel, channelImg, showChannel, poster, onClick, onChannelClick, ...styleProps }: VideoPreviewProps): JSX.Element;
export {};
