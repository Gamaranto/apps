export declare type VideoPlayerStyleProps = {
    width?: string | number;
    height?: string | number;
    responsive?: boolean;
    ratio?: string;
};
export declare let makeStyles: ({ width, height, responsive, ratio, }: VideoPlayerStyleProps) => {
    containerStyles: import("@emotion/utils").SerializedStyles;
    playerStyles: import("@emotion/utils").SerializedStyles;
};
