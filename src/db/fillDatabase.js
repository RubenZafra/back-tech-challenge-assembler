import GifModel from "../models/gif.model.js"

const fillDatabase = async () => {
  
    const gifs = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=CRNbvbhOWJwKJTxbTsFkgNbLy7WXRVFi&limit=10&offset=1000')
    const gifsJson = await gifs.json()
    const gifsArray = gifsJson.data
    gifsArray.map(item => {

        const gif = {
            title: item.title,
            url: item.images.original.url,

        }
        // console.log(gif)
        // addIntoDb(gif)
        // addTrendingIntoDb(gif)
        // addClassicIntoDb(gif)
    })
    
}

const addIntoDb = async (gif) => {
    try {
        // const gifFound = await GifModel.find({title: gif.title})
        // if(gifFound){
        //     console.log('gif already in db')
        //     return
        // }
        await GifModel.create(gif)
        console.log('gif added to db')

    } catch (error) {
        console.log(error)
    }
    
}
const addTrendingIntoDb = async (gif) => {
    try {
        // const gifFound = await GifModel.find({title: gif.title})
        // if(gifFound){
        //     console.log('gif already in db')
        //     return
        // }
        await GifModel.create(gif)
        console.log('gif added to db')

    } catch (error) {
        console.log(error)
    }
    
}
const addClassicIntoDb = async (gif) => {
    try {
        // const gifFound = await GifModel.find({title: gif.title})
        // if(gifFound){
        //     console.log('gif already in db')
        //     return
        // }
        await GifModel.create(gif)
        console.log('gif added to db')

    } catch (error) {
        console.log(error)
    }
    
}


export default fillDatabase;