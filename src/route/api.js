const express = require('express')
const BookerController =  require ('../controller/BookerController')
let router = express.Router();

const initAPIRoute = (app) => {
    // router.get('/users', APIController.getAllUsers); // method GET -> READ data
    // router.post('/create-user', APIController.createNewUser); // method POST -> CREATE data
    // router.put('/update-user', APIController.updateUser); //method PUT -> UPDATE data
    // router.delete('/delete-user/:id', APIController.deleteUser); //method DELETE -> DELETE data
    // booker router
    router.post('/auth', BookerController.getToken)

    return app.use('/', router)
}
module.exports = initAPIRoute;
