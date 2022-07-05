const express = require('express')
const initAPIRoute = require('./route/api')
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080;  
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// init api route
initAPIRoute(app);
const morgan = require('morgan');
app.use(morgan('tiny'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

