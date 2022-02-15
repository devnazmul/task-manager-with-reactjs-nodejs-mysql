const express = require('express');
const db = require('../config');

const router = express.Router();

router.post('/create', (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const due_date = req.body.due_data;
    const duration = req.body.duration;
    const type = req.body.type;

    const sql1 = `INSERT INTO tasks (title,description, due_date, duration, type) VALUES ('${title}','${description}', '${due_date}', '${duration}', '${type}')`;
    db.query(sql1, (err, rows, fields) => {
        if (!err) {
            res.send({
                message: 'Task created succesfully!'
            })
        } else {
            res.send(err)
        }
    })

})

router.get('/', (req, res, next) => {
    const sql1 = `SELECT * FROM tasks`;
    db.query(sql1, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})

router.put('/update/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const title = req.body.title;
    const description = req.body.description;
    const due_date = req.body.due_data;
    const duration = req.body.duration;
    const type = req.body.type;

    const sql1 = `UPDATE tasks SET title = '${title}', description = '${description}', due_date = '${due_date}', duration = '${duration}', type = '${type}' WHERE tasks.id = ${id}`;
    db.query(sql1, (err, rows, fields) => {
        if (!err) {
            res.send({
                message: 'update success!',
                status: 'done'
            })
        } else {
            res.send(err)
        }
    })
})

router.delete('/delete/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const sql1 = `DELETE FROM tasks WHERE tasks.id = ${id}`;
    db.query(sql1, (err, rows, fields) => {
        if (!err) {
            res.send({
                message: 'delete success!',
                status: 'done'
            })
        } else {
            res.send(err)
        }
    })
})

module.exports = router;