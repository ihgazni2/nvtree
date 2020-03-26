const fs = require("fs")

function rjson(fn) {
    let buf = fs.readFileSync(fn)
    let s = buf.toString()
    let d = JSON.parse(s)
    return(d)
}

function wjson(fn,js) {
    let s =JSON.stringify(js)
    fs.writeFileSync(fn,s)
}


module.exports = {
    rjson,
    wjson,
}
