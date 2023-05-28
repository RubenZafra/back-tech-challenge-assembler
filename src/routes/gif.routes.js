import { Router } from "express";
import { getAllGifs, getGenreGifs } from "../controllers/gif.controller.js";


const gifRouter = Router();

gifRouter.get("/", getAllGifs)
         .get("/:id", getGenreGifs)

export default gifRouter;