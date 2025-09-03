import mongoose from "mongoose"; 


const homesIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
]



export const homesforsaleData = [
        {
            _id: homesIds[0],
            name: "Vista Villas", 
            address: "2181 S Willa Street RD",
            price: "$500,000", 
            photo: "#",
            description: "5 bedrooms, 3 bathrooms, 2 car garage"
        },
        {
            _id: homesIds[1],
            name: "Wonder Estates", 
            address: "40 S Star Valley RD",
            price: "$121,000", 
            photo: "#",
            description: "2 bedrooms, 2 bathrooms, 1 car garage"
        },
        {
            _id: homesIds[2],
            name: "Land", 
            address: "155 W Berkshire Lane",
            price: "$40,000", 
            photo: "#",
            description: "2 Acres"
        },
        {
            _id: homesIds[2],
            name: "Madness Mansion", 
            address: "200 E 500 S Union BLVD",
            "price": "$999,579", 
            "photo": "#",
            "description": "8 bedrooms, 9 bathrooms, 5 car garage"
        },
        {
            _id: homesIds[3],
            name: "Global Impact Castle", 
            address: "130 Mountaintop RD",
            price: "$1,000,000", 
            photo: "#",
            description: "7 bedrooms, 8 bathrooms, 10 car garage"
        },
        {
            _id: homesIds[4],
            name: "Edmondson Estate", 
            address: "53 Street Valley Lane",
            price: "$499,575", 
            photo: "#",
            description: "10 bedrooms, 4 bathrooms, 2 car garage"
        },
        {
            _id: homesIds[5],
            name: "Star Valley Vista", 
            address: "2800 Twinkle Twinkle Lane",
            price: "$299,000", 
            photo: "#",
            description: "3 bedrooms, 2 bathrooms, 2 car garage"
        },
        {
            _id: homesIds[6],
            name: "Eisenhower Estates", 
            address: "141 S Scientific RD",
            price: "$399,000", 
            photo: "#",
            description: "4 bedrooms, 3 bathrooms, 4 car garage"
        },
        {
            _id: homesIds[7],
            name: "Monarch Meadows", 
            address: "500 Flowers Street",
            price: "$399,450", 
            photo: "#",
            description: "3 bedrooms, 3 bathrooms, 2 car garage"
        },
        {
            _id: homesIds[8],
            name: "Aspire View", 
            address: "400 Vista Street Lane",
            price: "$575,595", 
            photo: "#",
            description: "4 bedrooms, 5 bathrooms, 3 car garage"
        }
    ];