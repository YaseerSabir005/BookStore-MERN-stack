import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors policy
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome TO MERN Stack Tutorial')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log('App is listening to port: ${PORT}');
        });
    })
    .catch((error) => {
        console.log(error);
    });

    // CORS POLiCY -> cross-origin- resource sharing
    // security mechanism in the browser that restricts
    // web security mechanism that prevents unauthorized access to a resource or a server
    // server checks origins, methods, headers, and allow or reject requests


// using vite for react.js
// tailwind css- an open source CSS framework. it does not provide a series of predefined classes for elements such as buttons or tables.