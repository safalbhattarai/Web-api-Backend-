import mongoose from "mongoose";

const ConnectDB = async()=>{
    try {
        const {connection} = await mongoose.connect("mongodb://127.0.0.1:27017/QuickBite")
        console.log(`MongoDB i s connected At : ${connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

export default ConnectDB