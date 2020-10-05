var nvjson = require('nvjson')

var ndcls = require('ndtreejs').ndcls

var j0 = {
    x:[100,200],
    y:[
        's',
        {d:1000}
    ],
}

var j1 = {
    y:[
        's',
        {d:1000}
    ],
    x:[100,200]
}

var tree0 = nvjson.jobj2tree(j0)
var tree1 = nvjson.jobj2tree(j1)

//IGNORE write order
ndcls.struct_eq_ignore_order(tree0,tree1)
//true

//KEEP write order 
ndcls.struct_eq_keep_order(tree0,tree1)
//false


var j0 = {
    x:[100,200],
    y:[
        's',
        {d:1000}
    ],
}

var j1 = {
    'another_x':['',''],
    'another_y':[
        '',
        {'':1000}
    ],
}
var tree0 = nvjson.jobj2tree(j0)
var tree1 = nvjson.jobj2tree(j1)

//only compare nest layer struct
ndcls.struct_eq_ignore_order(tree0,tree1)
//true
ndcls.struct_eq_keep_order(tree0,tree1)
//true



//compare type 
var j0 = {
    x:[100,200],
    y:[
        's',
        {d:1000}
    ],
}

var j1 = {
    'another_x':{a:'',b:''},  // array [100,200] could be thinked as {0:...,1:...}, same struct as {...:...,...:...}
    'another_y':[
        '',
        {'':1000}
    ],
}


function cu_sign_func_ignore_primitive(nd) {
    let typ = nd.type 
    //only diff {} and []
    let cond = (typ === 'dict') || (typ === 'arr')
    if(cond) {
        
    } else {
        //other types all ame
        typ = 'other'
    }
    return(typ)
}

var tree0 = nvjson.jobj2tree(j0)
var tree1 = nvjson.jobj2tree(j1)
// no diff {} and []
ndcls.struct_eq_ignore_order(tree0,tree1)
//true
ndcls.struct_eq_keep_order(tree0,tree1)
//true
//compare {} and []
ndcls.struct_eq_ignore_order(tree0,tree1,cu_sign_func_ignore_primitive)
//false
ndcls.struct_eq_keep_order(tree0,tree1,cu_sign_func_ignore_primitive)
//false




var j0 = {
    x:[100,200],
    y:[
        's',
        {d:1000}
    ],
}

var j1 = {
    'another_x':[1,''],  //the second value j1.another_x[1] ='' is string  j0.x[1]  is number
    'another_y':[
        '',
        {'':1000}
    ],
}

var tree0 = nvjson.jobj2tree(j0)
var tree1 = nvjson.jobj2tree(j1)

function cu_sign_func_compare_primitive(nd) {
    //compare type
    let typ = nd.type 
    return(typ)
}
//only compare {} and []
//compare primitive value type
ndcls.struct_eq_ignore_order(tree0,tree1,cu_sign_func_ignore_primitive)
//true
ndcls.struct_eq_keep_order(tree0,tree1,cu_sign_func_ignore_primitive)
//true
//compare primitive value type
ndcls.struct_eq_ignore_order(tree0,tree1,cu_sign_func_compare_primitive)
//false
ndcls.struct_eq_keep_order(tree0,tree1,cu_sign_func_compare_primitive)
//false



