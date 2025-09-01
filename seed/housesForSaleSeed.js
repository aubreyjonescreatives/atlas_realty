import axios from 'axios'; 
import {HousesForSale} from '../models/housesforsale.js';
import mongoose from 'mongoose'; 
import * as dotenv from 'dotenv'; 
import HFS_SEED from '../data/housesforsale.json'; 
dotenv.config()




// seed to MongoDB database

const seedMongo = async () => {
    await mongoose.connect(`${process.env.DB_CONN_STRING}`,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        }
    )
}

const options = {
    method: 'GET', 
    url: `${HFS_SEED}`
}