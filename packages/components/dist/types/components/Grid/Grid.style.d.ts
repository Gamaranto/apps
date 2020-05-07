export declare type GridStyleProps = {
    minItemWidth?: string | number;
    maxItemWidth?: string | number;
};
export declare let makeStyles: ({ minItemWidth, maxItemWidth }: GridStyleProps) => {
    container: import("@emotion/utils").SerializedStyles;
    item: import("@emotion/utils").SerializedStyles;
};
