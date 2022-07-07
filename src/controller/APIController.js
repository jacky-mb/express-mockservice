import fs from 'fs'
let getBookings = async (req, res) => {
    let stubResponse = fs.readFile('src/response/get-booking.json')
    console.log(stubResponse)
   return res.status(201).json("jhgfjhdgf")
}

module.exports = {
    getBookings
}
