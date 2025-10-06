import { Router } from "express";
import SessionController from "./controllers/SessionController.js";
const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({ok : true});
});

routes.post("/teste", SessionController.store);

export default routes;