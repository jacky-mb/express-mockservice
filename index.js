const jsonHelper = require('./src/helpers/json-helpers')
let out = jsonHelper.readJson(process.cwd()+'/src/stub_response/get-booking.json')
console.log(out)