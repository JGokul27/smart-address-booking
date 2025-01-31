import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import addressRoutes from './routes/addressRoutes.js'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false)
const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB database is connected")
    } catch (error) {
        console.log("MongoDB database connection is failed")
    }
}
app.use('/api/addresses', addressRoutes);


app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}`)
});