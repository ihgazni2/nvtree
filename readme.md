tree
====

-   node and tree

install
=======

-   npm install ndtreejs

usage
=====

basic
-----

>     const ndcls = require('ndtreejs').ndcls
>     const wjson = require('ndtreejs').ndutil.wjson         
>
>     var tree = new ndcls.Root()
>     var nd1 = tree.$append_child()
>     var nd2 = nd1.$append_child()
>     var nd3 = nd1.$append_child() 
>     var nd4 = nd3.$append_child()
>     var nd5 = nd4.$add_rsib() 
>     var nd6 = nd1.$add_rsib()
>     var nd7 = nd6.$prepend_child()
>     var nd8 = nd6.$append_child()
>     var nd9 = nd6.$append_child()
>     nd9.$append_children(6)
>
>     tree.$sdfs_repr()
>
>        [0] : b49510d4-fcd2-4a47-b09c-79b32aad5c4d
>            [1] : a64275db-aa33-4d7e-a301-01dc206a4ed7
>                [2] : 4633aca6-4829-49f7-978a-737c0465ee4f
>                [3] : 447d5d9b-1f6d-4755-b4df-700608f5a0e6
>                    [4] : ac6e17c1-2f2a-4c02-b7ed-faab1cc4dec4
>                    [5] : be806683-e81b-4386-a8e0-3e09774479b9
>            [6] : cadd1dac-ec52-4640-9e9d-d68c486ee63f
>                [7] : 244bd3c9-701e-43c9-9622-b9bdd4d32af7
>                [8] : 8424ee0d-b5a8-4a41-8517-1a561d758f27
>                [9] : 4f4933d6-7309-4b11-b3c1-586f0d26630b
>                    [10] : da9881c7-1cae-49b7-b87e-f00fe6c64506
>                    [11] : fcc05507-fdae-45d8-8523-7780d51d32bb
>                    [12] : 5bdf7c5a-39d2-4a3c-9ec7-c16526b91d08
>                    [13] : dff3e119-f8f5-4806-9da1-0dcac907c376
>                    [14] : 9d0f1cee-35c7-4ed4-bf60-967705701d1d
>                    [15] : 55b37a55-72d3-4fd2-a36d-c66cc8190d03
>
>
>     wjson('ndict.json',tree.$dump())               
>     var ntree = ndcls.load('ndict.json') 


send-recv-msg
-------------

    //msg can be anything JS permitted
    //src/source can-ONLY be a-node-instance


    nd1.regis_recv_from_handler((src,msg)=>{console.log(src,msg)})

    > nd9
     [9e06e363] {}
    >

    > nd9.send_to(nd1,"hello,i am nd9")
     [9e06e363] {} hello,i am nd9

    /*
        because currently nodejs event-target have some display-bug,
        so the implement did NOT extends the EventTarget directly,
        instead, the implement use a internal private , use .et can check it,
        "$XXX...XXX__" event-type  is reserved for internal using,others are free
    */


get structure
-------------

    var al = tree.$sdfs_srch_action_list()
    [
      [ '$fstch' ],
      [ '$fstch' ],
      [ '$rsib' ],
      [ '$fstch' ],
      [ '$rsib' ],
      [ '$parent', '$parent', '$rsib' ],
      [ '$fstch' ],
      [ '$rsib' ],
      [ '$rsib' ],
      [ '$fstch' ],
      [ '$rsib' ],
      [ '$rsib' ],
      [ '$rsib' ],
      [ '$rsib' ],
      [ '$rsib' ],
      [ '$parent', '$parent', '$parent' ]
    ]
    >


    var ntree = ndcls.build_from_srch_action_list(al)

    > ntree.$sdfs_repr()
    [0] : 947005fe-70fc-4ee1-b554-4309b448843b
        [1] : e4be2505-d3ac-4f2d-bd8b-3dbeacd51c70
            [2] : 9d4c2127-0165-4643-b457-db80d1699238
            [3] : 03c3e386-47a2-405f-982c-73de645bae92
                [4] : 2fe7070b-3a66-49a9-b9a2-17ce819a2eac
                [5] : 1514f5df-5226-443d-878b-f9a3f88d9f96
        [6] : 94e47fea-004a-4975-af0e-b54181734086
            [7] : 998b88c6-eddb-4732-80f0-7e44e023a3d7
            [8] : 1243ab4d-4967-423f-8e76-e34c31d6562f
            [9] : e9f4708a-dcd7-4221-a348-601d36585599
                [10] : 5bac1dd3-00e6-4bdd-8742-3231702e67cf
                [11] : 8a44b51b-292d-43ad-ba1b-a06522cd8812
                [12] : 425e7f67-684a-48e8-8b13-6c581142d6c5
                [13] : 7809127b-9d45-47fa-8330-8755beafe06a
                [14] : 4507b13b-d707-453c-94d7-e59f4ad1bc69
                [15] : 09e34bb7-9768-4c43-af7c-e5f5b5f648e5




NODE METHODS
============

-   \$add\_lsib
-   \$add\_rsib
-   \$ances
-   \$ances\_count
-   \$append\_child
-   \$append\_children
-   \$pbreadth
-   \$breadth
-   \$children
-   \$children\_count
-   \$clone
-   \$count
-   \$depth
-   \$deses
-   \$disconn
-   \$dlmost\_des
-   \$drmost\_des
-   \$dump
-   \$dump2file
-   \$edfs
-   \$edfs\_next
-   \$edfs\_prev
-   \$fsibs
-   \$fstch
-   \$fstsib
-   \$height
-   \$insert\_child
-   \$is\_fstch
-   \$is\_inited
-   \$is\_leaf
-   \$is\_lonely
-   \$is\_lstch
-   \$is\_root
-   \$lcin
-   \$lsib
-   \$lsib\_of\_fst\_ance\_having\_lsib
-   \$lst\_lyr\_deses
-   \$lstch
-   \$lstsib
-   \$luncle
-   \$lyr
-   \$offset
-   \$parent
-   \$prepend\_child
-   \$psibs
-   \$rcin
-   \$rm\_all\_children
-   \$rm\_fstch
-   \$rm\_lstch
-   \$rm\_some\_children
-   \$rm\_which
-   \$root
-   \$rsib
-   \$rsib\_of\_fst\_ance\_having\_rsib
-   \$runcle
-   \$sdfs
-   \$sdfs2mat
-   \$sdfs\_next
-   \$sdfs\_prev
-   \$sdfs\_repr
-   \$sedfs
-   \$sedfs\_next
-   \$sedfs\_prev
-   \$sedfs\_repr
-   \$sibs
-   \$sibs\_count
-   \$sibseq
-   \$some\_ances
-   \$some\_children
-   \$some\_lyrs\_deses
-   \$some\_sibs
-   \$which\_ance
-   \$which\_child
-   \$which\_lyr\_deses
-   \$which\_sib
-   \$width
-   \$nest\_dict
-   \$sdfs\_next\_action\_for\_srch
-   \$sdfs\_srch\_action\_list
-   \$replace\_with
-   et                             
-   regis\_recv\_from\_handler
-   send\_to

TREE EXTRA METHODS
------------------

refer to <https://dom.spec.whatwg.org/#concept-tree> A tree is a finite
hierarchical tree structure. In tree order is preorder, depth-first
traversal of a tree.

-   \$is\_parent\_of(nd)

    >     An object that participates in a tree has a parent, which is either null or an object, and has children, which is an ordered set of objects. An object A whose parent is object B is a child of B.

-   \$is\_root\_of(nd)

    >     The root of an object is itself, if its parent is null, or else it is the root of its parent. The root of a tree is any object participating in that tree whose parent is null.

-   \$is\_descendant\_of(nd)

    >     An object A is called a descendant of an object B, if either A is a child of B or A is a child of an object C that is a descendant of B.        

-   \$is\_inclusive\_descendant\_of(nd)

    >     An inclusive descendant is an object or one of its descendants.        

-   \$is\_ancestor\_of(nd)

    >     An object A is called an ancestor of an object B if and only if B is a descendant of A.

-   \$is\_inclusive\_ancestor\_of(nd)

    >     An inclusive ancestor is an object or one of its ancestors.

-   \$is\_sibling\_of(nd)

    >     An object A is called a sibling of an object B, if and only if B and A share the same non-null parent.

-   \$is\_inclusive\_siblings\_of(nd)

    >     An inclusive sibling is an object or one of its siblings.

-   \$is\_preceding\_of(nd)

    >     An object A is preceding an object B if A and B are in the same tree and A comes before B in tree order.

-   \$is\_following\_of(nd)

    >     An object A is following an object B if A and B are in the same tree and A comes after B in tree order.

-   \$is\_fstch\_of(nd)

    >     The first child of an object is its first child or null if it has no children.

-   \$is\_lstch\_of(nd)

    >     The last child of an object is its last child or null if it has no children.

-   \$is\_previous\_sibling\_of(nd)

    >     The previous sibling of an object is its first preceding sibling or null if it has no preceding sibling.

-   \$is\_next\_sibling\_of(nd)

    >     The next sibling of an object is its first following sibling or null if it has no following sibling.

-   \$index()

    >     The index of an object is its number of preceding siblings, or 0 if it has none.

APIS
----

>     > require('ndtreejs')
>     {
>       ndfunc: {
>         calc_next_id: [Function: calc_next_id],
>         update_nodes_ids: [Function: update_nodes_ids],
>         creat_root: [Function: creat_root],
>         creat_nd: [Function: creat_nd],
>         is_inited: [Function: is_inited],
>         is_root: [Function: is_root],
>         is_fstch: [Function: is_fstch],
>         is_lstch: [Function: is_lstch],
>         is_leaf: [Function: is_leaf],
>         is_lonely: [Function: is_lonely],
>         is_id: [Function: is_id],
>         prepend_child: [Function: prepend_child],
>         append_child: [Function: append_child],
>         insert_child: [Function: insert_child],
>         add_rsib: [Function: add_rsib],
>         add_lsib: [Function: add_lsib],
>         get_fstch: [Function: get_fstch],
>         get_rsib: [Function: get_rsib],
>         get_children: [Function: get_children],
>         get_lstch: [Function: get_lstch],
>         get_which_child: [Function: get_which_child],
>         get_some_children: [Function: get_some_children],
>         get_fstsib: [Function: get_fstsib],
>         get_lstsib: [Function: get_lstsib],
>         get_preceding_sibs: [Function: get_preceding_sibs],
>         get_following_sibs: [Function: get_following_sibs],
>         get_sibs: [Function: get_sibs],
>         get_which_sib: [Function: get_which_sib],
>         get_some_sibs: [Function: get_some_sibs],
>         get_sibseq: [Function: get_sibseq],
>         get_lsib: [Function: get_lsib],
>         get_lyr: [Function: get_lyr],
>         get_breadth: [Function: get_breadth],
>         get_count: [Function: get_count],
>         get_depth: [Function: get_depth],
>         get_height: [Function: get_height],
>         get_fst_lyr_des_depth: [Function: get_fst_lyr_des_depth],
>         get_lst_lyr_des_depth: [Function: get_lst_lyr_des_depth],
>         get_which_lyr_des_depth: [Function: get_which_lyr_des_depth],
>         get_root: [Function: get_root],
>         get_parent: [Function: get_parent],
>         get_ances: [Function: get_ances],
>         get_which_ance: [Function: get_which_ance],
>         get_some_ances: [Function: get_some_ances],
>         get_rsib_of_fst_ance_having_rsib: [Function: get_rsib_of_fst_ance_having_rsib],
>         get_sdfs_next: [Function: get_sdfs_next],
>         get_drmost_des: [Function: get_drmost_des],
>         get_sdfs_prev: [Function: get_sdfs_prev],
>         get_sdfs: [Function: get_sdfs],
>         get_lsib_of_fst_ance_having_lsib: [Function: get_lsib_of_fst_ance_having_lsib],
>         get_dlmost_des: [Function: get_dlmost_des],
>         get_edfs_next: [Function: get_edfs_next],
>         get_edfs_prev: [Function: get_edfs_prev],
>         get_edfs: [Function: get_edfs],
>         'clear_$visited': [Function: clear_$visited],
>         get_sedfs_next: [Function: get_sedfs_next],
>         is_sedfs_traverse_finished: [Function: is_sedfs_traverse_finished],
>         get_sedfs_prev: [Function: get_sedfs_prev],
>         get_sedfs: [Function: get_sedfs],
>         get_deses: [Function: get_deses],
>         get_fst_lyr_deses: [Function: get_fst_lyr_deses],
>         get_lst_lyr_deses: [Function: get_lst_lyr_deses],
>         get_which_lyr_deses: [Function: get_which_lyr_deses],
>         get_some_deses: [Function: get_some_deses],
>         nd2ele: [Function: nd2ele],
>         sdfs2mat: [Function: sdfs2mat],
>         sdfs2edfs: [Function: sdfs2edfs],
>         sdfs2sedfs: [Function: sdfs2sedfs],
>         edfs2mat: [Function: edfs2mat],
>         edfs2sdfs: [Function: edfs2sdfs],
>         edfs2sedfs: [Function: edfs2sedfs],
>         sedfs2mat: [Function: sedfs2mat],
>         sedfs2sdfs: [Function: sedfs2sdfs],
>         sedfs2edfs: [Function: sedfs2edfs],
>         update_disconnected_nodes: [Function: update_disconnected_nodes],
>         update_orig_nodes: [Function: update_orig_nodes],
>         leafize: [Function: leafize],
>         rootize: [Function: rootize],
>         disconnect: [Function: disconnect],
>         rm_fstch: [Function: rm_fstch],
>         rm_lstch: [Function: rm_lstch],
>         rm_which: [Function: rm_which],
>         rm_some: [Function: rm_some],
>         rm_all: [Function: rm_all],
>         update_treeid: [Function: update_treeid],
>         update_one_nodeid: [Function: update_one_nodeid],
>         prepend_child_tree: [Function: prepend_child_tree],
>         append_child_tree: [Function: append_child_tree],
>         add_rsib_tree: [Function: add_rsib_tree],
>         add_lsib_tree: [Function: add_lsib_tree],
>         insert_child_tree: [Function: insert_child_tree]
>       },
>       ndcls: { Node: [Function: Node], load: [Function: load],load_from_nest_dict:[Function: load_from+nest_dict] },
>       ndutil: {rjson: [Function: rjson], wjson [Function: wjson]}
>     }
