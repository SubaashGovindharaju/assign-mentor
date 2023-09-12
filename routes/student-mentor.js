import express from 'express';
import { mentorDatabase as mentorDatabaseModel, studentDatabase as studentDatabaseModel } from '../database/modele.js';
import { v4 } from 'uuid';
const studentMentor = express.Router();

studentMentor.use(express.json());



// Create a Mentor
studentMentor.post('/mentors', async (req, res) => {
    try {
        const stdmen = new mentorDatabaseModel({ ...req.body });
        await stdmen.save();
        res.send({ msg: 'mentor created' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating mentor' });
    }
});



// Create a Student
studentMentor.post('/students', async (req, res) => {
    try {
        const stdmen = new studentDatabaseModel({ ...req.body });
        await stdmen.save();
        res.send({ msg: 'student created' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating student' });
    }
});

// Assign  Student to a Mentor 
studentMentor.put('/assign-student', async(req, res) => {
    try {
        const { mentorId,studentId } = req.body;
        // const { mentorId } = req.body;
        await mentorDatabaseModel.updateOne({mentorId:mentorId}, { $push: {students:[{studentId: studentId}] } });
        await studentDatabaseModel.updateOne({studentId : studentId }, { $set: req.body  });
        res.json({ msg: 'Student assign to mentor successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error assigning student to mentor' });
    }
});


// Show unassigned Students
studentMentor.get('/unassigned-students', async(req, res) => {
    try {
        const unassignedStudents = await studentDatabaseModel.find({ mentorId: { $exists: false } });
        res.json({ unassignedStudents });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching unassigned students' });
    }
});


// Assign or change mentor for particlar Student

studentMentor.put('/change-mentor', async(req, res) => {
    try {
        const {currentmentorId  ,mentorId,studentId } = req.body;
        await mentorDatabaseModel.updateOne({ mentorId: currentmentorId },{ $pull: { students: { studentId: studentId } } });
        await mentorDatabaseModel.updateOne({mentorId:mentorId}, { $push: {students:[{studentId: studentId}] } });
        await studentDatabaseModel.updateOne({studentId : studentId }, { $set: req.body  });
        await studentDatabaseModel.updateOne({studentId : studentId }, { $set: {previouslymentorId: currentmentorId}});
        res.json({ msg: 'Student changed to mentor successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error assigning student to mentor' });
    }
});


// Show all Students for a Mentor
studentMentor.get('/students-for-mentor/:mentorId', async(req, res) => {
    try {
        const { mentorId } = req.params;
        const student = await studentDatabaseModel.find({ mentorId :mentorId });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching students for mentor' });
    }
});


// Previously assined student
studentMentor.get('/Previous-student/:studentId', async(req, res) => {
    try {
        const { studentId } = req.params;
        const student = await studentDatabaseModel.findOne({ studentId });
        const previouslymentorId =student.previouslymentorId;
        const mentor=await mentorDatabaseModel.findOne({ mentorId:previouslymentorId },{name:1,mentorId:1});
        res.json(mentor);

    } catch (error) {
        res.status(500).json({ error: 'Error fetching students for mentor' });
    }
});

export default studentMentor;
