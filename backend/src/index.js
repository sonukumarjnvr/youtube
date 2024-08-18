//import mongoose from "mongoose";
//import express from "express";
//import { DB_NAME } from "./constant";



//require('dotenv').config({path: './env'});
import connectionDB from "./db/database.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path : './.env'
    });

connectionDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log(`database is not connected : ${error}`);
})










/*
const app = express();
;( async ()=>{
    try {
        await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR : ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listen on port : ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR : ", error)
        throw error;
    }
} )()

*/