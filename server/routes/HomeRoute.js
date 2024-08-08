"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const express_1 = require("express");
//API functions go here
const edamamApis_1 = require("../Apis/edamamApis");
exports.homeRoute = (0, express_1.Router)();
exports.homeRoute.get('/test', (req, res) => {
    res.send("Home router received a GET request.");
});
exports.homeRoute.get('/recipes', (req, res) => {
    const { ingredients } = req.query;
    let recipes;
    console.log('Food recipe api was called.');
    if (ingredients) {
        console.log(ingredients);
        recipes = (0, edamamApis_1.getEdamamRecipes)(ingredients);
        if (recipes)
            res.send(recipes);
    }
    else {
        console.log("Ingredients were not received.");
    }
});
