import express from 'express';
import studentMentor from './routes/student-mentor.js';
import connectToDb from './database/mongdbconnection.js';
const app = express();
const port = 3000;

await connectToDb();

app.use(express.static('public'));

app.use(express.json());
app.use('/api',studentMentor);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
