nodes = {}
nd0 = creat_root()
nodes[nd0._id] = nd0

nd1 = creat_nd(nodes)
prepend_child(nd0,nd1,nodes)


nd2 = creat_nd(nodes)
prepend_child(nd1,nd2,nodes)

nd3 = creat_nd(nodes)
add_rsib(nd2,nd3,nodes)

nd4 = creat_nd(nodes)
prepend_child(nd3,nd4,nodes)

nd5 = creat_nd(nodes)
add_rsib(nd4,nd5,nodes)


nd6 = creat_nd(nodes)
add_rsib(nd1,nd6,nodes)

nd7 = creat_nd(nodes)
prepend_child(nd6,nd7,nodes)

nd8 = creat_nd(nodes)
add_rsib(nd7,nd8,nodes)

nd9 = creat_nd(nodes)
add_rsib(nd8,nd9,nodes)


nd10 = creat_nd(nodes)
append_child(nd9,nd10,nodes)

nd11 = creat_nd(nodes)
append_child(nd9,nd11,nodes)

nd12 = creat_nd(nodes)
append_child(nd9,nd12,nodes)

nd1013 = creat_nd(nodes,1000)
add_lsib(nd12,nd1013,nodes)

nd1014 = creat_nd(nodes)
add_lsib(nd10,nd1014,nodes)

nd1015 = creat_nd(nodes)
insert_child(1,nd9,nd1015,nodes)

/*
    nd0:creat-root
        nd1: nd0-prepend-child
            nd2: nd1-prepend-child
            nd3: nd2-add-rsib
                nd4: nd3-prepend-child
                nd5: nd4-add-rsib
        nd6: nd1-add-rsib
           nd7:nd6-prepend-child
           nd8:nd7-add-rsib
           nd9:nd8-add-rsib
               nd10:
               nd11:
               nd12:
*/


//
child = get_which_child(1,root,nodes)
lstrsib = get_lstsib(child,nodes)
