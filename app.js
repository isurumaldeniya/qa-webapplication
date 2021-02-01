const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRouters = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
//invoking mongodb connection
const db = require('./db/connection');

app.use(morgan('tiny')); 
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/users', userRouters);

app.get('/', (req, res) => {
    res.json({
        msg: `application is listning on port ${port}`
    });
});


/*
we are configuring all the routes before intializing the app. 
*/
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});