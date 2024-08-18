import mongoose from "mongoose";
//import express from "express";
import { DB_NAME } from "../constant.js";


const connectionDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        console.log(`\n MONGODB is connected  !! DB Host : ${connectionInstance.connection.host}`); 
    } catch (error) {
        console.log("MONGODB connection failed : ", error);
        process.exit(1);
    }
}

export default connectionDB;

