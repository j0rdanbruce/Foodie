/**
 * File for api function calls
 */

import axios from "axios";

export async function getEdamamaRecipes(ingredients: string[]) {
  await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${ingredients}&app_id=9bb96f57&app_key=7965ab51393579924a92bc0f291e1e58`)
  .then(response => {
    
  })

}