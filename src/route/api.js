import express from "express"
import booker  from '../controller/BookerController'

let router = express.Router();

const initAPIRoute = (app) => {
    router.post('/bookings',booker.getBookings)
    router.get('/auth',booker.getToken)

    return app.use('/api/v1/', router)
}
export default initAPIRoute;
