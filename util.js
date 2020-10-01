
function rjson(fn) {
    let cond = globalThis.document;
    if(cond === undefined) {
        let fs = require('fs')
        let buf = fs.readFileSync(fn)
        let s = buf.toString()
        let d = JSON.parse(s)
        return(d)
    } else {
        return(undefined)
    }
}

function wjson(fn,js) {
    let cond = globalThis.document;
    if(cond){
        let fs = require('fs')
        let s =JSON.stringify(js)
        fs.writeFileSync(fn,s)
    } else {
        return(undefined)
    }
}


function is_int_str(s) {
    let n = parseInt(s)
    let ns = n.toString()
    return(ns === s)
}


module.exports = {
    rjson,
    wjson,
    is_int_str,
}
