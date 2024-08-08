/**
 * File for Edamam api function calls
 */

import axios, { AxiosRequestConfig } from "axios";

export async function getEdamamRecipes(ingredients: string[]) {
  const recipesList: recipe[] = [];

  const ingredientsParam = `${ingredients}`;
  const baseUrl = 'https://api.edamam.com';
  const apiUrl = '/api/recipes/v2';
  const axiosGetRecipesConfig: AxiosRequestConfig = {
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
        q: ingredientsParam,    //query paramter only takes type string when configured in the url parameters.
        app_id: '9bb96f57',
        app_key: '7965ab51393579924a92bc0f291e1e58'
      }
  };

  try {
    const response = await axios(axiosGetRecipesConfig);
    const recipes = response.data.hits;

    //Extract individual food recipe data from returned Edamam recipes JSON object
    for (let recipe of recipes) {
      const recipeData: recipe = {
        label: recipe.recipe.label,
        image: recipe.recipe.image,
        ingredients: recipe.recipe.ingredientLines,
        type: recipe.recipe.cuisineType,
        recipeUrl: recipe.recipe.url,
        servingSize: recipe.recipe.yield,
        calories: Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)
      }
      recipesList.push(recipeData);
    }
    console.log(recipesList);
    return recipesList;
    
  } catch (error) {
    console.log(error);
  }
}