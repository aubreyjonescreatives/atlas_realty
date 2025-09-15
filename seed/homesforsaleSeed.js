//  import mongoose from "mongoose"; 
//  import HomesforSale from '../models/homesforsale.js'
//  import * as dotenv from 'dotenv';

// dotenv.config()


//  mongoose
//     .connect(`${process.env.DB_CONN_STRING}`, {
//         useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             console.log('CONNECTION TIME');
//         })
//         .catch((err) => {
//             console.log(err);
//         });
    

// const homesforsaleSeed = [
//         {
//             name: "Vista Villas", 
//             address: "2181 S Willa Street RD",
//             price: "$500,000", 
//             photo: "#",
//             description: "5 bedrooms, 3 bathrooms, 2 car garage"
//         },
//         {
//             name: "Wonder Estates", 
//             address: "40 S Star Valley RD",
//             price: "$121,000", 
//             photo: "#",
//             description: "2 bedrooms, 2 bathrooms, 1 car garage"
//         },
//         {
//             name: "Land", 
//             address: "155 W Berkshire Lane",
//             price: "$40,000", 
//             photo: "#",
//             description: "2 Acres"
//         },
//         {
//             name: "Madness Mansion", 
//             address: "200 E 500 S Union BLVD",
//             "price": "$999,579", 
//             "photo": "#",
//             "description": "8 bedrooms, 9 bathrooms, 5 car garage"
//         },
//         {
//             name: "Global Impact Castle", 
//             address: "130 Mountaintop RD",
//             price: "$1,000,000", 
//             photo: "#",
//             description: "7 bedrooms, 8 bathrooms, 10 car garage"
//         },
//         {
//             name: "Edmondson Estate", 
//             address: "53 Street Valley Lane",
//             price: "$499,575", 
//             photo: "#",
//             description: "10 bedrooms, 4 bathrooms, 2 car garage"
//         },
//         {
//             name: "Star Valley Vista", 
//             address: "2800 Twinkle Twinkle Lane",
//             price: "$299,000", 
//             photo: "#",
//             description: "3 bedrooms, 2 bathrooms, 2 car garage"
//         },
//         {
//             name: "Eisenhower Estates", 
//             address: "141 S Scientific RD",
//             price: "$399,000", 
//             photo: "#",
//             description: "4 bedrooms, 3 bathrooms, 4 car garage"
//         },
//         {
//             name: "Monarch Meadows", 
//             address: "500 Flowers Street",
//             price: "$399,450", 
//             photo: "#",
//             description: "3 bedrooms, 3 bathrooms, 2 car garage"
//         },
//         {
//             name: "Aspire View", 
//             address: "400 Vista Street Lane",
//             price: "$575,595", 
//             photo: "#",
//             description: "4 bedrooms, 5 bathrooms, 3 car garage"
//         }
//     ];

// const trythisWay = async () => {
//     await HomesforSale.deleteMany({});
//     await HomesforSale.insertMany(homesforsaleSeed)
// }

// trythisWay().then(() => {
//     mongoose.connection.close()
// });



// const homesIds = [
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
//     new mongoose.Types.ObjectId(),
// ];



// export const homesforsaleSeed = [
//         {
//             _id: homesIds[0],
//             name: "Vista Villas", 
//             address: "2181 S Willa Street RD",
//             price: "$500,000", 
//             photo: "#",
//             description: "5 bedrooms, 3 bathrooms, 2 car garage"
//         },
//         {
//             _id: homesIds[1],
//             name: "Wonder Estates", 
//             address: "40 S Star Valley RD",
//             price: "$121,000", 
//             photo: "#",
//             description: "2 bedrooms, 2 bathrooms, 1 car garage"
//         },
//         {
//             _id: homesIds[2],
//             name: "Land", 
//             address: "155 W Berkshire Lane",
//             price: "$40,000", 
//             photo: "#",
//             description: "2 Acres"
//         },
//         {
//             _id: homesIds[3],
//             name: "Madness Mansion", 
//             address: "200 E 500 S Union BLVD",
//             "price": "$999,579", 
//             "photo": "#",
//             "description": "8 bedrooms, 9 bathrooms, 5 car garage"
//         },
//         {
//             _id: homesIds[4],
//             name: "Global Impact Castle", 
//             address: "130 Mountaintop RD",
//             price: "$1,000,000", 
//             photo: "#",
//             description: "7 bedrooms, 8 bathrooms, 10 car garage"
//         },
//         {
//             _id: homesIds[5],
//             name: "Edmondson Estate", 
//             address: "53 Street Valley Lane",
//             price: "$499,575", 
//             photo: "#",
//             description: "10 bedrooms, 4 bathrooms, 2 car garage"
//         },
//         {
//             _id: homesIds[6],
//             name: "Star Valley Vista", 
//             address: "2800 Twinkle Twinkle Lane",
//             price: "$299,000", 
//             photo: "#",
//             description: "3 bedrooms, 2 bathrooms, 2 car garage"
//         },
//         {
//             _id: homesIds[7],
//             name: "Eisenhower Estates", 
//             address: "141 S Scientific RD",
//             price: "$399,000", 
//             photo: "#",
//             description: "4 bedrooms, 3 bathrooms, 4 car garage"
//         },
//         {
//             _id: homesIds[8],
//             name: "Monarch Meadows", 
//             address: "500 Flowers Street",
//             price: "$399,450", 
//             photo: "#",
//             description: "3 bedrooms, 3 bathrooms, 2 car garage"
//         },
//         {
//             _id: homesIds[9],
//             name: "Aspire View", 
//             address: "400 Vista Street Lane",
//             price: "$575,595", 
//             photo: "#",
//             description: "4 bedrooms, 5 bathrooms, 3 car garage"
//         }
//     ];