import { Router } from "express";
import SessionController from "./controllers/SessionController.js";
import HouseController from "./controllers/HouseController.js";
import multer from "multer";
import uploadConfig from "./config/upload.js";

const routes = new Router();
const upload = multer(uploadConfig);

routes.get("/", (req, res) => {
    return res.json({ok : true});
});

routes.post("/teste", SessionController.store);

routes.post("/houses", upload.single("thumbnail"), HouseController.store);

export default routes;