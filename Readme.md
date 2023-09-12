Student Mentor Management System

This repository contains a Node.js application for managing mentors and students and their assignments. It provides API endpoints for creating mentors, students, assigning students to mentors, and other related operations.

Prerequisites:

Before running this application, ensure you have the following dependencies installed:

Node.js
npm (Node Package Manager)
MongoDB (Make sure it's running)

Getting Started:

1. Clone this repository to your local machine:

git clone <repository-url>

2. Install the required npm packages by navigating to the project directory and running:

npm install

3. Configure your MongoDB connection in the database/modele.js file if necessary.

4. Start the application by running:

npm start

The application should now be running on http://localhost:3000.

API Endpoints:

Create a Mentor:

- URL: /mentors
- Method: POST
- Description: Create a new mentor.
- Request Body:
{
  "name": "Mentor Name",
  "email": "mentor@email.com"
}
- Response:
{
  "msg": "mentor created"
}

Create a Student:

- URL: /students
- Method: POST
- Description: Create a new student.
- Request Body:
{
  "name": "Student Name",
  "email": "student@email.com"
}
- Response:
{
  "msg": "student created"
}

Assign Student to a Mentor:

- URL: /assign-student
- Method: PUT
- Description: Assign a student to a mentor.
- Request Body:
{
  "mentorId": "Mentor ID",
  "studentId": "Student ID"
}
- Response:
{
  "msg": "Student changed to mentor successfully"
}

Show Unassigned Students:

- URL: /unassigned-students
- Method: GET
- Description: Get a list of unassigned students.
- Response:
{
  "unassignedStudents": [...]
}

Assign or Change Mentor for a Student:

- URL: /change-mentor
- Method: PUT
- Description: Change the mentor for a specific student.
- Request Body:
{
  "currentmentorId": "Current Mentor ID",
  "mentorId": "New Mentor ID",
  "studentId": "Student ID"
}
- Response:
{
  "msg": "Student changed to mentor successfully"
}

Show All Students for a Mentor:

- URL: /students-for-mentor/:mentorId
- Method: GET
- Description: Get a list of students assigned to a specific mentor.
- Response:
[...]

Previously Assigned Student:

- URL: /previous-student/:studentId
- Method: GET
- Description: Get the previously assigned mentor for a student.
- Response:
{
  "name": "Mentor Name",
  "mentorId": "Mentor ID"
}

Error Handling:

If any of the API endpoints encounter an error, they will respond with a status code of 500 and a JSON error message.

Author:

[Your Name]

License:

This project is licensed under the MIT License - see the LICENSE file for details.
