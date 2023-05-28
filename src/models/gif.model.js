import {Schema, model} from 'mongoose'

const GifSchema = new Schema (
    {
        title: {type: String, required: true},
        url: {type: String, required: true},
        liked: {type: Boolean, default: false},
        category: {type: String, required: true, default: 'classic'},
        description: {type: String, default: ''}
    }
)

const GifModel = model('Gif', GifSchema)

export default GifModel
