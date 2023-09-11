import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    // id: {
    //     type: 'string',
    //     require: true,
    // },
    name: {
        type: 'string',
        require: true,
    },
    dob: {
        type: 'string',
        require: true,
    },
    Email: {
        type: 'string',
        require: true,
    },
    studentId: {
        type: 'string',
        require: true,
        unique: true
    },
    mentorId:{
        type: 'string',
        require: true
    },
    previouslymentorId:{
        type: 'string',
        require: true
    }
});

const mentorSchema = new mongoose.Schema({
    // id: {
    //     type: 'string',
    //     require: true,
    // },
    name: {
        type: 'string',
        require: true,
    },
    dob: {
        type: 'string',
        require: true,
    },
    Email: {
        type: 'string',
        require: true,
    },
    mentorId: {
        type: 'string',
        require: true,
        unique: true
    },
    students: [
        
        {studentId: String},
    ],
});


export const studentDatabase = mongoose.model('studentdatabase', studentSchema);
export const mentorDatabase = mongoose.model('mentordatabase', mentorSchema);
