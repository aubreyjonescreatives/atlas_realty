import { HomesforSale } from '../models/homesforsale.js'



export const postaddHomesforSale = ((req, res) => {

const home = new HomesforSale({
    id: req.body.data.id,
    name: req.body.data.name,
    url: req.body.data.url,
    address: req.body.data.address,
    price: req.body.data.price,  
    photo: req.body.data.photo, 
    description: req.body.data.description
})
console.log(home)
home.save() //save method is provided by Mongoose
res.json(home)


})




export const getAllHomesforSale = ((req, res) => {
    HomesforSale.find()
    .then(homes => {
        res.json(homes)
    })
    .catch(err => console.log(err))
})

export const getHomesforSale = async (req, res) => {
    const homes = await HomesforSale.find()
    if (!homes) {
        return res.status(400).json({Message: `No games found`})
    }
    res.json(homes)
}

export const getHomesforSaleId = async (req, res) => {
    const homeId = req.body.homeId
    console.log(homeId)
    try{
    const home = await HomesforSale.findById(homeId)
    if (!home) {
        return res.status(404).json({Message: 'Game Not Found'})
    }
    res.json(home)
} catch(err) {
    res.status(400).json({Message: `Invalid ID: ${err}`})
}
}

export const putEditHomesforSale = async (req, res) => {
    const homeId = req.body.data.homeId
    const updatedObj = {
        id: req.body.data.id,
        name: req.body.data.name,
        url: req.body.data.url,
        address: req.body.data.address,
        price: req.body.data.price,  
        photo: req.body.data.photo, 
        description: req.body.data.description 
    } 
    try {
    const home = await HomesforSale.findByIdAndUpdate(homeId, updatedObj, {new: true})
    console.log(`Updated the home for sale ${home}`)   
    res.status(200).json(game)
    } catch(err) {
        res.status(400).json({Message: `Could not update: ${err}`})
    }


}

export const deleteHomesforSale = async (req, res) => {
    const homeId = req.body.homeId
    console.log(homeId)
    try {
        const deletedHome = await HomesforSale.findByIdAndRemove(homeId)
            if (!deletedHome) {
               return res.status(400).json({Message: `Home to Delete Not Found.`})
            }
            console.log(`Deleted the product ${deletedHome}`)
            res.sendStatus(200)
        } catch (err) {
            res.status(400).json({Message: `Invalid ID: ${err}`})
        }

    }