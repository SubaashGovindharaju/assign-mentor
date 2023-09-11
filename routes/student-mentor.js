// import express from 'express';
// import { mentorDatabase as mentorDatabaseModel, studentDatabase as studentDatabaseModel } from '../database/modele.js';
// import { v4 } from 'uuid';

// const studentMentor = express.Router();

// studentMentor.use(express.json());
// // Sample data structures to simulate mentors and students
// const mentors = [];
// const students = [];

// // API Routes

// // Create a Mentor
// studentMentor.post('/mentors', async (req, res) => {
//     try {
//         const stdmen = new mentorDatabaseModel({ ...req.body });
//         // id: v4()
//         await stdmen.save();
//         res.send({ msg: 'mentor created' });


//         // const { name, email } = req.body;
//         // const mentor = { id: mentors.length + 1, name, email };
//         // mentors.push(mentor);
//         // console.log(mentors);

//     } catch (error) {
//         res.status(500).json({ error: 'Error creating mentor' });
//     }
// });

// // Create a Student
// studentMentor.post('/students', async (req, res) => {
//     try {
//         const stdmen = new studentDatabaseModel({ ...req.body }); 
//         // id: v4()
//         await stdmen.save();
//         res.send({ msg: 'student created' });
//         // const { name, email } = req.body;
//         // const student = { id: students.length + 1, name, email, mentorId: null };
//         // students.push(student);
//         // console.log(student);
//         // res.json(student);
//     } catch (error) {
//         res.status(500).json({ error: 'Error creating student' });
//     }
// });

// // // Assign a Student to a Mentor
// // studentMentor.post('/assign-student', (req, res) => {
// //     try {

// //         const stdmen =new studentDatabaseModel({...req.body,id:v4()});

// //         // const { studentId, mentorId } = req.body;
// //         // const student = students.find((s) => s.id === studentId);
// //         // if (!student) {
// //         //     res.status(404).json({ error: 'Student not found' });
// //         //     return;
// //         // }
// //         // student.mentorId = mentorId;
// //         // res.json(student);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Error assigning student to mentor' });
// //     }
// // });

// // Assign a Student to a Mentor

// // Update Mentor for a Student
// studentMentor.put('/assign-student-to-mentor/:studentId', async (req, res) => {
//     try {
//         const { studentId } = req.params;
//         const { mentorId } = req.body;
// console.log('student',studentId);
// console.log('student',mentorId);

//         // Find the student by their ID
//         // const student = await studentDatabaseModel.findById(studentId);

//         // new studentDatabaseModel(req.body);
//         // console.log('student',studentId);

//         // await studentDatabaseModel.updateOne({studentId : studentId }, { '$set': req.body });
//         // if (!student) {
//         //     return res.status(404).json({ error: 'Student not found' });
//         // }

//         // Assign the student to the mentor
//         studentDatabaseModel.mentorId = mentorId;
//         await studentDatabaseModel.updateOne({studentId : studentId }, { $set: req.body });
//         console.log('studen6t',studentId);
//         console.log('stud6ent',mentorId);
//         await mentorDatabaseModel.updateOne({mentorId:mentorId}, { $push: {students:[{studentId: studentId}] } });

//         res.json({ msg: 'Student assigned to mentor successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error assigning student to mentor' });
//     }
// });



// // Show unassigned Students
// studentMentor.get('/unassigned-students', async(req, res) => {
//     try {
//         const unassignedStudents = await studentDatabaseModel.find({ mentorId: { $exists: false } });

//         res.json({ unassignedStudents });
//         // const unassigned = students.filter((student) => student.mentorId === null);
//         // res.json(unassigned);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching unassigned students' });
//     }
// });


// // Change  for a Student

// studentMentor.put('/change-mentor/:studentId', async (req, res) => {
//     try {
//         const { studentId } = req.params;
//         const { mentorId } = req.body;
//         studentDatabaseModel.mentorId = mentorId;
//         await studentDatabaseModel.updateOne({studentId : studentId }, { '$set': req.body });
//         console.log('studen6t',studentId);
//         console.log('stud6ent',mentorId);
//         res.json({ msg: 'Student changed to mentor successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error assigning student to mentor' });
//     }
// });

// // studentMentor.put('/change-mentor/:studentId', (req, res) => {
// //     try {
// //         const { studentId } = req.params;
// //         const { mentorId } = req.body;

// //         const student = students.filter((s) => s.id === studentId);


// //         if (!student) {
// //             res.status(404).json({ error: 'Student not found' });
// //             return;
// //         }
// //         student.mentorId = mentorId;
// //         students.push = student;
// //         res.json(student);


// //     } catch (error) {
// //         res.status(500).json({ error: 'Error changing student mentor' });
// //     }


// //     res.send(students);

// // });

// // Assign Mentor to a Student
// studentMentor.put('/assign-mentor', async(req, res) => {
//     try {
//         const { studentId } = req.body;
//         const { mentorId } = req.body;
//         // await mentorDatabaseModel.updateOne({mentorId:mentorId}, { $push: {students:[{studentId: studentId}] } });
//         await mentorDatabaseModel.updateOne({ mentorId: mentorId },
//             { $pull: { students: { studentId: studentId } } }
//           );

//         // await studentDatabaseModel.updateOne({studentId : studentId }, { $set: req.body  });
//         res.json({ msg: 'Student changed to mentor successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error assigning student to mentor' });
//     }
// });

// // Show all Students for a Mentor
// studentMentor.get('/students-for-mentor/:mentorId', (req, res) => {
//     try {
//         const { mentorId } = req.params;
//         const mentorStudents = students.filter((student) => student.mentorId === mentorId);
//         res.json(mentorStudents);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching students for mentor' });
//     }
// });

// // Show the previous Mentor for a Student
// studentMentor.get('/previous-mentor/:studentId', (req, res) => {
//     try {
//         const { studentId } = req.params;
//         const student = students.find((s) => s.id === studentId);
//         const previousMentor = mentors.find((mentor) => mentor.id === student?.previousMentorId);

//         if (!previousMentor) {
//             res.status(404).json({ error: 'No previous mentor found' });
//             return;
//         }

//         res.json(previousMentor);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching previous mentor' });
//     }
// });

// export default studentMentor;




import express from 'express';
import { mentorDatabase as mentorDatabaseModel, studentDatabase as studentDatabaseModel } from '../database/modele.js';
import { v4 } from 'uuid';
const studentMentor = express.Router();

studentMentor.use(express.json());
const mentors = [];
const students = [];


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
        res.json({ msg: 'Student changed to mentor successfully' });
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
