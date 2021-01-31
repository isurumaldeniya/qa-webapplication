import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgon from 'morgan';


require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({
        msg: `application is listning on port ${port}`
    })
});


/*
we are configuring all the routes before intializing the app. 
*/
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});