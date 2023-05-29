import { Router } from "express";
import { createGifFile, createGifUrl, getAllGifs, getGenreGifs } from "../controllers/gif.controller.js";
// import { uploadGifs } from "../utils/cloudinary.js";


const gifRouter = Router();

gifRouter.get("/", getAllGifs)
         .post("/url", createGifUrl)
         .post("/file", createGifFile)
         .get("/:id", getGenreGifs)

export default gifRouter;