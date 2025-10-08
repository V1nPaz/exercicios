import {Router} from "express";
import app from "./app.js";

const routes = new Router();

app.get("/", (req, res) =>{
    return res.json({ok: true});
})

export default routes;

