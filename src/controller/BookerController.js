const random =require('uuid')
let rand = random.v4
let getToken = async(req,res)=>{
    let v = req.body
   res.send(v)
}
module.exports ={
    getToken
}