"use strict";
/**
 * File for Edamam api function calls
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdamamRecipes = getEdamamRecipes;
const axios_1 = __importDefault(require("axios"));
function getEdamamRecipes(ingredients) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipesList = [];
        const ingredientsParam = `${ingredients}`;
        const baseUrl = 'https://api.edamam.com';
        const apiUrl = '/api/recipes/v2';
        const axiosGetRecipesConfig = {
            baseURL: baseUrl,
            url: apiUrl,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Accept-Language': 'en'
            },
            params: {
                type: 'public',
                beta: 'false',
                q: ingredientsParam, //query paramter only takes type string when configured in the url parameters.
                app_id: '9bb96f57',
                app_key: '7965ab51393579924a92bc0f291e1e58'
            }
        };
        try {
            const response = yield (0, axios_1.default)(axiosGetRecipesConfig);
            const recipes = response.data.hits;
            //Extract individual food recipe data from returned Edamam recipes JSON object
            for (let recipe of recipes) {
                const recipeData = {
                    label: recipe.recipe.label,
                    image: recipe.recipe.image,
                    ingredients: recipe.recipe.ingredientLines,
                    type: recipe.recipe.cuisineType,
                    recipeUrl: recipe.recipe.url,
                    servingSize: recipe.recipe.yield,
                    calories: Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)
                };
                recipesList.push(recipeData);
            }
            console.log(recipesList);
            return recipesList;
        }
        catch (error) {
            console.log(error);
        }
    });
}
