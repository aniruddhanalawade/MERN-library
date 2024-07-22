const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

const routes = require("../server/routes/bookRoutes");

const port = process.env.PORT || 5000;

//middlerwares

app.use(cors());
app.use(express.json());
app.use('/books',routes);

mongoose.connect('mongodb://localhost:27017/MERNdemo')
.then(() => {
    console.log('Database connected...')
}).then(() => {
    app.listen(port,()=> {
        console.log(`server running on http://localhost:${port}`);
    })
})
