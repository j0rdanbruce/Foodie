import axios, { AxiosRequestConfig } from "axios";


export const getRecipes = async (ingredients: string[]) => {
    const baseUrl = 'http://localhost:4000';
    const recipesUrl = '/recipes';
    const axiosGetRecipesConfig: AxiosRequestConfig = {
        baseURL: baseUrl,
        url: recipesUrl,
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        params: {
            ingredients: ingredients,
        }
    };

    try {
      const response = await axios(axiosGetRecipesConfig);

      return response.data;
    } catch (error) {
      console.error(error);
    }

    /*
    fetch("http://localhost:4000/recipes", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: ingredients
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    */
}