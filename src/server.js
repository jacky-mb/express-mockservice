import express from 'express';
import initAPIRoute from './route/api';


require('dotenv').config();
var morgan = require('morgan')



const app = express();
const port = process.env.PORT || 8080;
app.use(morgan('combined'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


initAPIRoute(app);




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

