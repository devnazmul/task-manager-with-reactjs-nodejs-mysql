const express = require('express');
const db = require('../config');

const router = express.Router();

router.post('/create', (req, res, next) => {
    const title = req.body.title;
    const due_date = req.body.due_date;
    const duration = req.body.duration;
    const type = req.body.type;
    const is_completed = false;

    const sql1 = `INSERT INTO tasks (title, due_date, duration, type, is_completed) VALUES ('${title}', '${due_date}', '${duration}', '${type}', ${is_completed})`;
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



router.get('/:id', (req, res, next) => {

    const id = parseInt(req.params.id);
    
    const sql1 = `SELECT * FROM tasks WHERE id=${id}`;
    db.query(sql1, (err, rows, fields) => {
        if (!err) {
            rows.length !== 0 ? res.send(rows) : res.send({ message: 'Task not found!' })

        } else {
            res.send(err)
        }
    })
})



router.put('/update/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const title = req.body.title;
    const due_date = req.body.due_date;
    const duration = req.body.duration;
    const type = req.body.type;

    const sql1 = `UPDATE tasks SET title = '${title}', due_date = '${due_date}', duration = '${duration}', type = '${type}' WHERE tasks.id = ${id}`;
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



router.put('/updateone/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const sql1 = `UPDATE tasks SET is_completed = '${parseInt(req.body.is_completed)}' WHERE tasks.id = ${id}`;
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


router.post('/filter', (req, res, next) => {
    const data = req.body;
    
    const sql1 = `SELECT * FROM tasks WHERE due_date LIKE '%${data.time}%'`;
    
    db.query(sql1, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})
module.exports = router;