const ndcls = require('../index').ndcls

let start = (new Date()).getTime()

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

let end = (new Date()).getTime()

console.log(end-start)
