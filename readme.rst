tree
----
- node and tree

install
-------
- npm install ndtreejs

usage
-----

    ::
        const sh=require('ndtreejs').ndfuncterm.sdfs_show_root_tree 
        const ndcls = require('ndtreejs').ndcls
        const wjson = require('ndtreejs').util.wjson         

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
        sh(tree.$dump())
        
        wjson('ndict.json',tree.$dump())               
        var ntree = ndcls.load('ndict.json') 
        

METHODS
--------

-\$add_lsib
-\$add_rsib
-\$ances
-\$ances_count
-\$append_child
-\$append_children
-\$breadth
-\$children
-\$children_count
-\$clone
-\$count
-\$depth
-\$deses
-\$disconn
-\$dlmost_des
-\$drmost_des
-\$dump
-\$dump2file
-\$edfs
-\$edfs_next
-\$edfs_prev
-\$fsibs
-\$fstch
-\$fstsib
-\$height
-\$insert_child
-\$is_fstch
-\$is_inited
-\$is_leaf
-\$is_lonely
-\$is_lstch
-\$is_root
-\$lcin
-\$lsib
-\$lsib_of_fst_ance_having_lsib
-\$lst_lyr_deses
-\$lstch
-\$lstsib
-\$luncle
-\$lyr
-\$offset
-\$parent
-\$prepend_child
-\$psibs
-\$rcin
-\$rm_all_children
-\$rm_fstch
-\$rm_lstch
-\$rm_some_children
-\$rm_which
-\$root
-\$rsib
-\$rsib_of_fst_ance_having_rsib
-\$runcle
-\$sdfs
-\$sdfs2mat
-\$sdfs_next
-\$sdfs_prev
-\$sdfs_repr
-\$sedfs
-\$sedfs_next
-\$sedfs_prev
-\$sedfs_repr
-\$sibs
-\$sibs_count
-\$sibseq
-\$some_ances
-\$some_children
-\$some_lyrs_deses
-\$some_sibs
-\$which_ance
-\$which_child
-\$which_lyr_deses
-\$which_sib
-\$width


APIS
====


