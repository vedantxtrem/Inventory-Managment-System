import app from "./app.js";
import ConnectToDB from "./config/Db.config.js";

const PORT = process.env.PORT || 5050

app.listen(PORT, async(req,res)=>{
    await ConnectToDB();
    console.log(`App is Running on localhost: ${PORT}`);
    
})