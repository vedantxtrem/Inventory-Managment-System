import  mongoose  from "mongoose";

const ConnectToDB = async(req,res,next)=>{
    try {
        const {connection}= await mongoose.connect(
            process.env.MONGO_URL
        );
        if(connection){
            console.log("connected to MongoDB");
        }
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

export default ConnectToDB;