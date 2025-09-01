import express from 'express'; 
//import path from 'path';
//import helmet from 'helmet'; 
//import compression from 'compression'; 
import * as dotenv from 'dotenv'; 
import cors from 'cors'; 


//hidden files

dotenv.config()
 

//adding express

const server = express()

//CORS Issues Resolution: 

server.use(cors())

server.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "*")
})

server.use(express.urlencoded({extended: true}))

server.use(express.json())

//server.use(helmet())

//server.use(compression())

server.use(express.static('public'))

//homesAPIRouter

server.use('/homesforsale', homesForSaleRouter)


//if Page Not Found: 

server.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})


// MongoDB :) in a try/catch promise


const port = process.env.PORT;

mongoose.set('strictQuery', false)

mongoose.connect(process.env.DB_CONN_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => {
    server.listen(PORT, () => console.log(`Server Started: ${PORT}`));
}).catch((error) => console.log(`${error} sorry not sorry. That didn't work. Try again.`)); 



