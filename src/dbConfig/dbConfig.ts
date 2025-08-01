import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection;

        connection.on('connection', () => {
            console.log("MongoDB connected successfully");
        })
        
        connection.on('error', (err) => {
            console.log("MongoDB connection error. Plase make sure DB is running. " + err);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong in connecting to DB");
        console.log(error);
    }
}