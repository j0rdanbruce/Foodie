/**
 * Types declaration file
 */

declare interface recipe {
    label: string,
    image?: string,
    ingredients: string[],
    type: string,
    servingSize: number,
    calories?: number,
    recipeUrl: string
}