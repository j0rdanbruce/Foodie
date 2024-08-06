import { Router, Request, Response } from "express";

import axios from 'axios';

export const homeRoute = Router();

homeRoute.get('/test', (req: Request, res: Response) => {
    res.send("Home router received a GET request.");
});

homeRoute.get('/recipes', (req: Request, res: Response) => {
    console.log('Food recipe api was called.');
    const ingredients = req.body.ingredients;
    
    if (ingredients) {
        console.log(ingredients);
    } else {
        console.log("Ingredients were not received.");
    }

    try {
        const response = axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${ingredients}&app_id=9bb96f57&app_key=7965ab51393579924a92bc0f291e1e58`)
    } catch (error) {
        console.error(error);
    }
});