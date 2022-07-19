
import {readJson} from '../helpers/json-helpers'
import fs from 'fs'

let test = (req,res)=>{
    return res.json({
        message : "hello"
    })
}
const getToken =(req,res)=>{
    return res.send(res.params)
}

const getBookings = (req, res) => {
    let listbooking = readJson(process.cwd()+'/src/stub_response/get-booking.json')
    return res.send(listbooking)
}

const getBookingById = (req,res)=>{
    return res.send(req.query)
}
module.exports = {getBookings,getToken,getBookingById,test}

