import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const localMongoUrl='mongodb://localhost:27017/day-37'
// const userName='subaashG';
// const password='bjuMyuL3sBpkWLiY';

const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD || '';
const clusterName=process.env.DB_CLUSTER || '';
const dbName=process.env.DB_NAME || '';
const cloudMongoUrl=`mongodb+srv://${username}:${password}@${clusterName}/${dbName}?retryWrites=true&w=majority`;

// mongodb+srv://subaashG:<password>@cluster0.qzc4bmq.mongodb.net/?retryWrites=true&w=majority

const connectToDb=async()=>{
    try{
        await mongoose.connect(cloudMongoUrl,
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