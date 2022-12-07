const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());

app.get('/api/teacher', (req, res) => {
    console.log('GET /api/teacher');
    db.teacher.findAll().then((results) => {
        
        res.json(results);
    })
})

app.get('/api/students', (req, res) => {
    console.log('GET /api/students');
    db.students.findAll().then((results) => {
        
        res.json(results);
    })
})

app.get('/api/teacher/:teacher_id/students', (req, res) => {
    const teacher_id = Number(req.params.teacher_id);

    if(isNaN(teacher_id)) {
        res.json({error: "teacher_id is not a number"})
        return;
    }

    db.teacher.findByPk(teacher_id, { include: db.students }).then((teacher) => {
        res.json(teacher);
    })
})

app.listen(3000, () => {
    console.log('app started at port 3000');
})