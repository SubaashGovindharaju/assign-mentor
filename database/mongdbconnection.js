import mongoose from "mongoose";

const localMongoUrl='mongodb://localhost:27017/day-37'

const connectToDb=async()=>{
    try{
        await mongoose.connect(localMongoUrl,
            {
                useNewUrlParser:true,
            });
            console.log("db connected");
        
    }catch(err){

        console.log(err);
        process.exit(1);
    }
}
export default connectToDb;