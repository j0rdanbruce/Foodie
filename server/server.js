"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
//environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const allowedOrigins = [
    "http://10.0.0.98:8081",
    "exp://10.0.0.98:8081",
    "http://localhost:8081"
];
const corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
};
/**
 * app configurations go here
 */
app.use((0, cors_1.default)(corsOptions)); //cors app configuration
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/', routes_1.routes); //routes
app.get('/', (req, res) => {
    res.send('This is the typescript + express backend.');
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
