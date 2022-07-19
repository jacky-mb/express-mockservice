import express from 'express';
import initAPIRoute from './route/api';


require('dotenv').config();
var morgan = require('morgan')



const app = express();
const port = process.env.PORT || 9999;
app.use(morgan('combined'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


initAPIRoute(app);
app.use((req,res)=>{
    res.status(404).send("404 NotFound")
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})

