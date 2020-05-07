export declare type SearchBarStyleProps = {
    size?: "normal" | "large" | "small" | "full";
    color?: "neutral" | "danger" | "success";
};
export declare let makeStyles: ({ color, size, }: SearchBarStyleProps) => {
    containerStyle: import("@emotion/utils").SerializedStyles;
    inputStyle: import("@emotion/utils").SerializedStyles;
};
