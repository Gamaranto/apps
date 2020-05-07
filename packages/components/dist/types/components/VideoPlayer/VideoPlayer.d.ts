/// <reference types="react" />
import { VideoPlayerStyleProps } from "./VideoPlayer.style";
export declare type VideoPlayerProps = {
    src?: string;
    playing?: boolean;
    poster?: string;
    controls?: boolean;
    volume?: number;
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    className?: string;
    onReady?(): void;
    onStart?(): void;
    onPlay?(): void;
    onPause?(): void;
    onBuffer?(): void;
    onEnded?(): void;
    onError?(error: any): void;
    onDuration?(duration: number): void;
    onProgress?(state: {
        played: number;
        loaded: number;
    }): void;
} & VideoPlayerStyleProps;
export default function VideoPlayer({ src, poster, playing, onPause, autoPlay, loop, muted, onStart, ratio, onReady, onPlay, onBuffer, onError, onEnded, onDuration, onProgress, className, volume, controls, ...styleProps }: VideoPlayerProps): JSX.Element;
