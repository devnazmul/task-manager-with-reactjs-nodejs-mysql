const db = require("./config");
const express = require('express');
const cors = require('cors');
const { indexRouter, usersRouter, taskesRouter } = require("./routes");
require('dotenv').config()

const app = express();


//MIDDLEWARE
app.use(express.json());
app.use(cors())

//ROUTERS
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/tasks',taskesRouter);



const port = process.env.PORT || 8080;



db.connect(function(err) {
    if (err) throw err;
    console.log("MySQL is connected.......");
    var sql = "CREATE TABLE IF NOT EXISTS users (full_name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        // db.query(`INSERT users(full_name,email,password) VALUE ('Md Nazmul Islam','md.nazmul@gmail.com','12345')`, (err,result)=>{
        //     if (err) throw err;
        //     db.query('SELECT * FROM users', (err,result)=>{
        //         if (err) throw err;
        //         console.log(result);
        //     })
        // })
        
      });
  });

// db.end()



app.listen(port,()=>{
    console.log(`App is listenning on ${process.env.HOST}:${process.env.PORT}`);
})