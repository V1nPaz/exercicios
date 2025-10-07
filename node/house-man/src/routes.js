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

//Users
routes.post("/users", SessionController.store);
routes.get("/users", SessionController.index);
routes.delete("/users", SessionController.destroy);
//Houses
routes.get("/houses", HouseController.index);
routes.post("/houses", upload.single("thumbnail"), HouseController.store);
routes.delete("/houses", HouseController.destroy);

routes.get("/house", HouseController.show);


export default routes;