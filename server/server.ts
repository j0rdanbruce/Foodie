import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { routes } from "./routes";

//environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4000;

const allowedOrigins: string[] = [
    "http://10.0.0.98:8081",
    "exp://10.0.0.98:8081",
    "http://localhost:8081"
];
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
}

/**
 * app configurations go here
 */
app.use(cors(corsOptions));     //cors app configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);           //routes

app.get('/', (req: Request, res: Response) => {
    res.send('This is the typescript + express backend.');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});