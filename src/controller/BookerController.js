
import {readJson} from '../helpers/json-helpers'
import fs from 'fs'


const getToken =(req,res)=>{
    return res.send("kdhfjkhdfjk")
}

const getBookings = (req, res) => {
    let listbooking = readJson(process.cwd()+'/src/stub_response/get-booking.json')
    return res.send(listbooking)
}

module.exports = {getBookings,getToken}

