const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());
app.use(express.static(__dirname + '/public'))

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

app.post("/api/teacher", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;

    if(name === "" || email === "" || subject === "") {
        res.json({error: "name or email can not be empty"});
        return;
    }

    db.teacher.create({name: name, email: email, subject: subject}).then(result => {
        res.json(result);
    })
})

app.post(`/api/teacher/:teacher_id/students`, (req, res) => {
    const name = req.body.name;
    const grade = req.body.grade;
    const teacher_id = Number(req.params.teacher_id);

    if(name === "" || grade === "") {
        res.json({error: "name or grade can not be empty"});
        return;
    }

    db.students.create({name: name, grade: grade, teacher_id: teacher_id}).then(result => {
        res.json(result);
    })
})

app.delete("/api/students/:students_id", (req, res) => {
    const students_id = Number(req.params.students_id);

    if(isNaN(students_id)) {
        res.json({error: "student_id is not a number"})
        return;
    }

    db.students.destroy({ where: { id: students_id} }).then((result) => {
        res.json({status: "OK"})
    }).catch((e) => {
        res.json({error: "error"})
    })
})

app.patch("/api/students/:students_id", (req, res) => {
    const students_id = Number(req.params.students_id);
console.log("hat")
    if(isNaN(students_id)) {
        res.json({error: "student_id is not a number"})
        return;
    }

    db.students.update({grade: req.body.grade}, { where: {id: students_id}}).then((result) => {
        res.json({status: "OK"})
    }).catch((e) => {
        res.json({error: "error"})
    })
})

app.listen(3000, () => {
    console.log('app started at port 3000');
})