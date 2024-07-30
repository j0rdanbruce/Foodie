/**
 * Types file.
 */

declare type Ingredient = {
    key: number;
    index: Number;
    title: string;
    handleDelete: (index: Number) => void;
}