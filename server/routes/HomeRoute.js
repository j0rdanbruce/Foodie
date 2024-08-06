"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const express_1 = require("express");
exports.homeRoute = (0, express_1.Router)();
exports.homeRoute.get('/test', (req, res) => {
    res.send("Home router received a GET request.");
});
exports.homeRoute.post('/recipes', (req, res) => {
    console.log('Food recipe api was called.');
    const ingredients = req.body.ingredients;
    if (ingredients) {
        console.log(ingredients);
    }
    else {
        console.log("Ingredients were not received.");
    }
});
