import {Schema, model} from 'mongoose'

const GifSchema = new Schema (
    {
        title: {type: String},
        url: {type: String, required: true, default: ''},
        liked: {type: Boolean, default: false},
        category: {type: String, default: 'user'},
        description: {type: String, default: ''}
    }
)

const GifModel = model('Gif', GifSchema)

export default GifModel
