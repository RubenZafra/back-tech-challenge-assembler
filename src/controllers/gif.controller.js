import GifModel from "../models/gif.model.js"



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

