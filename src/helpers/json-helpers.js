const fs = require('fs')
const path =require ('path')
let readJson = (p) =>{
    let dataRaw = fs.readFileSync(p)
    return out = JSON.parse(dataRaw)
}
let setPath = (p)=>{
    return path.resolve(__dirname, p)
}
module.exports = {readJson,setPath}