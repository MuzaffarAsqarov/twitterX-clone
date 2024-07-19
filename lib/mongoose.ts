import mongoose, {ConnectOptions, Connection} from "mongoose"
import { promise } from "zod";

let isConnect: boolean = false;

export const connectToDatabase = async () =>{
    mongoose.set("strictQuery", true)

    if(!process.env.MONGO_URI){
        return console.error("MONGO_URI is not defined")
    }

    if(isConnect){
        return;
    }
    try {
        const options: ConnectOptions = {
            dbName: "twitter-x",
            autoCreate: true,
        };

        await mongoose.connect(process.env.MONGO_URI, options);

        isConnected: true
        console.log("Connect to database");
    } catch (error) {
        console.log("Error connection to database")
    }
}