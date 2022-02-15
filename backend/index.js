const db = require("./config");
const express = require('express');
const cors = require('cors');
const { taskesRouter } = require("./routes");
require('dotenv').config()

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors())

//ROUTERS

app.use('/tasks', taskesRouter);


const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('yo ho its working');
})

db.connect(function (err) {
    if (err) throw err;
    console.log("MySQL is connected.......");
});


app.listen(port, () => {
    console.log(`App is listenning on ${process.env.HOST}:${process.env.PORT}`);
})