/// <reference types="react" />
import { DetailsTableStyleProps } from "./DetailsTable.style";
declare type DetailsTableProps = {
    details: {
        [k: string]: any;
    };
} & DetailsTableStyleProps;
export default function DetailsTable({ details, ...styleProps }: DetailsTableProps): JSX.Element;
export {};
