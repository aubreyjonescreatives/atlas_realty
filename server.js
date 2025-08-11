import express from 'express'; 
//import path from 'path';
//import helmet from 'helmet'; 
//import compression from 'compression'; 
import * as dotenv from 'dotenv'; 
//import cors from 'cors'; 


dotenv.config()


const port = process.env.PORT; 

const server = express()

//server.use(cors())

server.use(express.urlencoded({extended: true}))

server.use(express.json())

//server.use(helmet())

//server.use(compression())

server.use(express.static('public'))




server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



