const fs = require('fs')

const readJson =  (path) =>{
    return fs.readFileSync(path,{ encoding: 'utf8' });
}

module.exports = {readJson}