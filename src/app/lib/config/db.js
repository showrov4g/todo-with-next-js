import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect(`mongodb+srv://todo:T8vPMS5h8We81KZ3@cluster0.23lvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Db connect")
}