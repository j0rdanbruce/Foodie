import express from "express";
import { homeRoute } from "./HomeRoute";

export const routes = express.Router();

routes.use(homeRoute);
