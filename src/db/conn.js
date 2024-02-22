import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Database connection established!!!")
    } catch (error) {
        console.log("Connection failed " , error)
        process.exit(1)
    }
}
export default connectDB;