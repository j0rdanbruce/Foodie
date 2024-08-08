import { Router, Request, Response } from "express";

//API functions go here
import { getEdamamRecipes } from "../Apis/edamamApis";

export const homeRoute = Router();

homeRoute.get('/test', (req: Request, res: Response) => {
    res.send("Home router received a GET request.");
});

homeRoute.get('/recipes', (req: Request, res: Response) => {
    const {ingredients} = req.query;
    let recipes;
    console.log('Food recipe api was called.');
    
    if (ingredients) {
        console.log(ingredients);
        recipes = getEdamamRecipes(ingredients as string[]);
        if (recipes) res.send(recipes)
    } else {
        console.log("Ingredients were not received.");
    }
});