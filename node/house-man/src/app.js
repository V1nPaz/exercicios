import express from "express";
import routes from "./routes.js";
import mongoose from "mongoose";

class App{

    constructor(){
        this.server = express();

        mongoose.connect("mongodb+srv://houseman:houseman@houseman.vvbchoz.mongodb.net/?retryWrites=true&w=majority&appName=houseman");
        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.server.use(express.json());
    };

    routes(){
        this.server.use(routes);
    };
};

export default new App().server;