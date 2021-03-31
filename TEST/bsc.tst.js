const ndcls = require('../index').ndcls

var start = (new Date()).getTime()

for(let i=0;i<10000;i++) {
    var tree = new ndcls.Root()
    var nd1 = tree.$append_child()
    var nd2 = nd1.$append_child()
    var nd3 = nd1.$append_child() 
    var nd4 = nd3.$append_child()
    var nd5 = nd4.$add_rsib() 
    var nd6 = nd1.$add_rsib()
    var nd7 = nd6.$prepend_child()
    var nd8 = nd6.$append_child()
    var nd9 = nd6.$append_child()
    nd9.$append_children(6)
    //tree.$sdfs_repr()
}

var end = (new Date()).getTime()

console.log("with_id,with_et: ",end-start)

var start = (new Date()).getTime()

for(let i=0;i<10000;i++) {
    var tree = new ndcls.Root(true,false)
    var nd1 = tree.$append_child()
    var nd2 = nd1.$append_child()
    var nd3 = nd1.$append_child()
    var nd4 = nd3.$append_child()
    var nd5 = nd4.$add_rsib()
    var nd6 = nd1.$add_rsib()
    var nd7 = nd6.$prepend_child()
    var nd8 = nd6.$append_child()
    var nd9 = nd6.$append_child()
    nd9.$append_children(6)
    //tree.$sdfs_repr()
}

var end = (new Date()).getTime()

console.log("with_id,with_no_et: ",end-start)


var start = (new Date()).getTime()

for(let i=0;i<10000;i++) {
    var tree = new ndcls.Root(false,true)
    var nd1 = tree.$append_child()
    var nd2 = nd1.$append_child()
    var nd3 = nd1.$append_child()
    var nd4 = nd3.$append_child()
    var nd5 = nd4.$add_rsib()
    var nd6 = nd1.$add_rsib()
    var nd7 = nd6.$prepend_child()
    var nd8 = nd6.$append_child()
    var nd9 = nd6.$append_child()
    nd9.$append_children(6)
    //tree.$sdfs_repr()
}

var end = (new Date()).getTime()

console.log("with_no_id,with_et: ",end-start)


var start = (new Date()).getTime()

for(let i=0;i<10000;i++) {
    var tree = new ndcls.Root(false,false)
    var nd1 = tree.$append_child()
    var nd2 = nd1.$append_child()
    var nd3 = nd1.$append_child()
    var nd4 = nd3.$append_child()
    var nd5 = nd4.$add_rsib()
    var nd6 = nd1.$add_rsib()
    var nd7 = nd6.$prepend_child()
    var nd8 = nd6.$append_child()
    var nd9 = nd6.$append_child()
    nd9.$append_children(6)
    //tree.$sdfs_repr()
}

var end = (new Date()).getTime()

console.log("with_no_id,with_no_et: ",end-start)



var tree = new ndcls.Root()
var nd1 = tree.$append_child()
var nd2 = nd1.$append_child()
var nd3 = nd1.$append_child()
var nd4 = nd3.$append_child()
var nd5 = nd4.$add_rsib()
var nd6 = nd1.$add_rsib()
var nd7 = nd6.$prepend_child()
var nd8 = nd6.$append_child()
var nd9 = nd6.$append_child()
nd9.$append_children(6)

tree.$sdfs_repr()



var tree = new ndcls.Root(true,false)
var nd1 = tree.$append_child()
var nd2 = nd1.$append_child()
var nd3 = nd1.$append_child() 
var nd4 = nd3.$append_child()
var nd5 = nd4.$add_rsib() 
var nd6 = nd1.$add_rsib()
var nd7 = nd6.$prepend_child()
var nd8 = nd6.$append_child()
var nd9 = nd6.$append_child()
nd9.$append_children(6)

tree.$sdfs_repr()


var tree = new ndcls.Root(false,false)
var nd1 = tree.$append_child()
var nd2 = nd1.$append_child()
var nd3 = nd1.$append_child()
var nd4 = nd3.$append_child()
var nd5 = nd4.$add_rsib()
var nd6 = nd1.$add_rsib()
var nd7 = nd6.$prepend_child()
var nd8 = nd6.$append_child()
var nd9 = nd6.$append_child()
nd9.$append_children(6)

tree.$sdfs_repr()


var tree = new ndcls.Root(false,true)
var nd1 = tree.$append_child()
var nd2 = nd1.$append_child()
var nd3 = nd1.$append_child()
var nd4 = nd3.$append_child()
var nd5 = nd4.$add_rsib()
var nd6 = nd1.$add_rsib()
var nd7 = nd6.$prepend_child()
var nd8 = nd6.$append_child()
var nd9 = nd6.$append_child()
nd9.$append_children(6)

tree.$sdfs_repr()



//
//
var tree = new ndcls.Root(false,false)
var nd1 = tree.$append_child()
var nd2 = nd1.$append_child()
var nd3 = nd1.$append_child() 
var nd4 = nd3.$append_child()
var nd5 = nd4.$add_rsib() 
var nd6 = nd1.$add_rsib()
var nd7 = nd6.$prepend_child()
var nd8 = nd6.$append_child()
var nd9 = nd6.$append_child()
nd9.$append_children(6)

tree.$sdfs_repr()
wjson('ndict.json',tree.$dump())  
/*
{
  '0': {
    _tree: 0,
    _fstch: 1,
    _lsib: null,
    _rsib: null,
    _parent: null,
    _id: 0,
    _guid: undefined
  },
  '1': {
    _tree: 0,
    _fstch: 2,
    _lsib: null,
    _rsib: 6,
    _parent: undefined,
    _id: 1,
    _guid: undefined
  },
  '2': {
    _tree: 0,
    _fstch: null,
    _lsib: null,
    _rsib: 3,
    _parent: undefined,
    _id: 2,
    _guid: undefined
  },
  '3': {
    _tree: 0,
    _fstch: 4,
    _lsib: undefined,
    _rsib: null,
    _parent: 1,
    _id: 3,
    _guid: undefined
  },
  '4': {
    _tree: 0,
    _fstch: null,
    _lsib: null,
    _rsib: 5,
    _parent: undefined,
    _id: 4,
    _guid: undefined
  },
  '5': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: null,
    _parent: 3,
    _id: 5,
    _guid: undefined
  },
  '6': {
    _tree: 0,
    _fstch: 7,
    _lsib: undefined,
    _rsib: null,
    _parent: 0,
    _id: 6,
    _guid: undefined
  },
  '7': {
    _tree: 0,
    _fstch: null,
    _lsib: null,
    _rsib: 8,
    _parent: undefined,
    _id: 7,
    _guid: undefined
  },
  '8': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: 9,
    _parent: undefined,
    _id: 8,
    _guid: undefined
  },
  '9': {
    _tree: 0,
    _fstch: 10,
    _lsib: undefined,
    _rsib: null,
    _parent: 6,
    _id: 9,
    _guid: undefined
  },
  '10': {
    _tree: 0,
    _fstch: null,
    _lsib: null,
    _rsib: 11,
    _parent: undefined,
    _id: 10,
    _guid: undefined
  },
  '11': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: 12,
    _parent: undefined,
    _id: 11,
    _guid: undefined
  },
  '12': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: 13,
    _parent: undefined,
    _id: 12,
    _guid: undefined
  },
  '13': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: 14,
    _parent: undefined,
    _id: 13,
    _guid: undefined
  },
  '14': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: 15,
    _parent: undefined,
    _id: 14,
    _guid: undefined
  },
  '15': {
    _tree: 0,
    _fstch: null,
    _lsib: undefined,
    _rsib: null,
    _parent: 9,
    _id: 15,
    _guid: undefined
  }
}

*/
var ntree = ndcls.load('ndict.json') 
ntree.$sdfs_repr()


