import mongoose from 'mongoose'


const Schema = mongoose.Schema 



const homesforsaleSchema = new Schema ({
    name: {
        type: String, 
        required: false
    },
    url: {
        type: String, 
        required: false
    },
    address: {
        type: String, 
        required: false
    },
    price: {
        type: String, 
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    description: {
        type: String, 
        required: false
    },
    id: {
        type: String,
        required: false
    }, 
})

export const HomesforSale = mongoose.model('homesforsale.js', homesforsaleSchema)