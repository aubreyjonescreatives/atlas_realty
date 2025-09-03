import axios from 'axios'; 
import {HomesforSale} from '../models/homesforsale.js';
import mongoose from 'mongoose'; 
import * as dotenv from 'dotenv'; 
//import HOMES from '../data/homesforsale.json'
dotenv.config()




// seed to MongoDB database

const seedMongo = async () => {
    await mongoose.connect(`${process.env.DB_CONN_STRING}`,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })


const options = {
    method: 'GET', 
    url: `${process.env.DATA}`
}
try {
    const response = await axios.request(options)
    console.log(response.data.homesforsale)
    await addHomesforSale(response.data.homesforsale)
    await mongoose.connection.close()
} catch (error) {
    console.error(error)
}

}


const addHomesforSale = async (oneHome) => {
    const homes = new HomesforSale({
        name: oneHome.name, 
        url: oneHome.url,
        address: oneHome.address,
        price: oneHome.price,
        photo: oneHome.photo,
        description: oneHome.description,
        id: oneHome.id     
    })
    await homes.save()
    console.log('Added successfully')
}

const addHomes = async (homeList) => {
    for (let home of homeList) {
        console.log(home)
        await addHome(home)
    }
}

seedMongo()