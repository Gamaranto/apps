export declare type SectionStyleProps = {
    topDivider?: boolean;
    bottomDivider?: boolean;
};
export declare let makeStyles: ({ topDivider, bottomDivider, }: SectionStyleProps) => {
    section: import("@emotion/utils").SerializedStyles;
    header: import("@emotion/utils").SerializedStyles;
    title: import("@emotion/utils").SerializedStyles;
    link: import("@emotion/utils").SerializedStyles;
};
