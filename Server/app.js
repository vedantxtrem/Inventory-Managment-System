// import packages and modules ..
import express from "express";
import morgan from "morgan";
import errorMiddleware from "./middleware/error.middleware.js";
import  Dotenv  from "dotenv";
import cors from 'cors';

// Load environment variables
Dotenv.config({
    path: './.env'
});



// creating instance 

const app = express();

// configuring 

app.use(express.json());

app.use(morgan('dev'));


//cors
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}))


// testing route

app.get('/ping', (_req, res) => {
    res.send('Pong');
});

// working routes
import Productrouter from "./routes/product.routes.js";

app.use('/api/v1/product', Productrouter);

  
  
// Default catch all route - 404
app.all('*', (_req, res) => {
    res.status(404).send('OOPS!!! 404 Page Not Found');
});
  
// Custom error handling middleware
app.use(errorMiddleware);

export default app;


