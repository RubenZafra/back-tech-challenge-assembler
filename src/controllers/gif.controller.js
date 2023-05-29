import GifModel from "../models/gif.model.js"
import { uploadGifs } from "../utils/cloudinary.js"



export const getAllGifs = async (req, res) => {
    try{
        const gifs = await GifModel.find({}).lean().exec()
        res.status(200).send(gifs)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const getGenreGifs = async (req, res) => {

    const category = req.params.id;

    try{
        const gifs = await GifModel.find({category: category}).lean().exec()
        res.status(200).send(gifs)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createGifUrl = async (req, res) => {


    const {title, url, category, description} = req.body

    try{
    const gifExists = await GifModel.findOne({title: title}).lean().exec()

    if(gifExists) {
        return res.status(400).send("Gif already exists")
    }

    const gif = await GifModel.create({
        title, 
        category, 
        url, 
        description
    })
    res.status(200).send(gif)


    } catch (error) {
        res.status(500).send(error)
    }
}

export const createGifFile = async (req, res) => {

    const {title, category, description} = req.body;
    const file = req.files['file[]'];

    console.log(req.body)
    console.log(file)

    try{

    const resultMeme = await uploadGifs(file.tempFilePath);

    const newMeme = await GifModel.create({
      title,
      description,
      url: resultMeme.secure_url,
      category,
    });

    return res.status(200).send(newMeme)

    } catch (error) {
        res.status(500).send(error)
    }
}

