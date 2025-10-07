import express from "express";
import routes from "./routes.js";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class App{

    constructor(){
        this.server = express();

        mongoose.connect("mongodb+srv://houseman:houseman@houseman.vvbchoz.mongodb.net/?retryWrites=true&w=majority&appName=houseman");
        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.server.use(cors());
        this.server.use(
            "/files",
            express.static(path.resolve(__dirname, "..", "uploads"))
        );
        
        this.server.use(express.json());
    };

    routes(){
        this.server.use(routes);
    };
};

export default new App().server;