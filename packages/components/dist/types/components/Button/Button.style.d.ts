export declare type ButtonStyleProps = {
    color?: "primary" | "danger" | "success" | "neutral";
    size?: "normal" | "large" | "small" | "full";
    outlined?: boolean;
};
export declare let makeStyles: ({ color, size, outlined, }: ButtonStyleProps) => import("@emotion/utils").SerializedStyles;
