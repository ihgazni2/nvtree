var ndfunc = require("./ndfunc.js")
var term = require("./term.js")
var sh = term.sdfs_show_root_tree
nodes = {}

function fill_nodes(nodes) {
    nd0 = ndfunc.creat_root()
    nodes[nd0._id] = nd0
    nd1 = ndfunc.creat_nd(nodes)
    ndfunc.prepend_child(nd0,nd1,nodes)
    nd2 = ndfunc.creat_nd(nodes)
    ndfunc.prepend_child(nd1,nd2,nodes)
    nd3 = ndfunc.creat_nd(nodes)
    ndfunc.add_rsib(nd2,nd3,nodes)
    nd4 = ndfunc.creat_nd(nodes)
    ndfunc.prepend_child(nd3,nd4,nodes)
    nd5 = ndfunc.creat_nd(nodes)
    ndfunc.add_rsib(nd4,nd5,nodes)
    nd6 = ndfunc.creat_nd(nodes)
    ndfunc.add_rsib(nd1,nd6,nodes)
    nd7 = ndfunc.creat_nd(nodes)
    ndfunc.prepend_child(nd6,nd7,nodes)
    nd8 = ndfunc.creat_nd(nodes)
    ndfunc.add_rsib(nd7,nd8,nodes)
    nd9 = ndfunc.creat_nd(nodes)
    ndfunc.add_rsib(nd8,nd9,nodes)
    nd10 = ndfunc.creat_nd(nodes)
    ndfunc.append_child(nd9,nd10,nodes)
    nd11 = ndfunc.creat_nd(nodes)
    ndfunc.append_child(nd9,nd11,nodes)
    nd12 = ndfunc.creat_nd(nodes)
    ndfunc.append_child(nd9,nd12,nodes)
    nd1013 = ndfunc.creat_nd(nodes,1000)
    ndfunc.add_lsib(nd12,nd1013,nodes)
    nd1014 = ndfunc.creat_nd(nodes)
    ndfunc.add_lsib(nd10,nd1014,nodes)
    nd1015 = ndfunc.creat_nd(nodes)
    ndfunc.insert_child(1,nd9,nd1015,nodes)
}

module.exports = {
    fill_nodes
}
