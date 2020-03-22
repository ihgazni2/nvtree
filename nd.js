const cmmn = require("./cmmn.js")

function creat_root(n=0){
    let _id = n
    let root = {
        _id:_id,
        _fstch:null,
        _lsib:null,
        _rsib:null,
        _parent:null,
        _tree:_id
    }
    return(root)
}


function creat_nd(nodes,n=0) {
    /*
        by_dflt  leaf_nd
    */
    let _id = cmmn.calc_next_id(nodes)+n
    let nd = {
        _id:_id,
        _fstch:null,
        _lsib:undefined,
        _rsib:undefined,
        _parent:undefined,
        _tree:undefined
    }
    return(nd)
}


function is_inited(nd) {
    let cond = (nd._tree !== undefined)
    return(cond)
}

function is_root(nd) {
    let cond0 = (nd._tree!== undefined)
    let cond1 = (nd._tree === nd._id)
    return(cond0 && cond1)
}

function is_fstch(nd) {
    let cond = (nd._lsib === null)
    return(cond)
}

function is_lstch(nd) {
    let cond = (nd._rsib === null)
    return(cond)
}

function is_leaf(nd) {
    let cond = (nd._fstch === null)
    return(cond)
}

function eq(nd0,nd1) {
    return(nd0._id === nd1._id)
}


//
function prepend_child(nd,child,nodes) {
    let cond = is_leaf(nd)
    child._tree = nd._tree
    child._lsib = null
    if(cond){
        //child 也是lstch
        child._rsib = null
        child._parent = nd._id
    } else {
        //变更old_fstch
        let old_fstch = nodes[nd._fstch]
        //old_fstch 不再是fstch
        old_fstch._lsib = undefined
        //更新child
        child._rsib = old_fstch._id
        //添加child
    }
    nd._fstch = child._id
    nodes[child._id] = child
    return(nd)
}

function append_child(nd,child,nodes) {
    let cond = is_leaf(nd)
    child._tree = nd._tree
    child._rsib = null
    if(cond){
        //child 也是lstch
        nd._fstch = child._id
        child._lsib = null
    } else {
        //变更old_lstch
        let old_lstch = get_lstch(nd,nodes)
        //old_lstch 不再是lstch
        old_lstch._parent = undefined
        old_lstch._rsib = child._id
    }
    child._parent = nd._id
    nodes[child._id] = child
    return(nd)
}

function add_rsib(nd,rsib,nodes) {
    //root 不可操作
    if(is_root(nd)) {
        console.log("cant addrsib to root")
        return(nd)
    }
    //
    let cond = is_lstch(nd)
    rsib._tree = nd._tree
    if(cond) {
        rsib._parent = nd._parent
        nd._parent = undefined
        rsib._rsib = null
    } else {
        rsib._rsib = nd._rsib
    }
    nd._rsib = rsib._id
    nodes[rsib._id] = rsib
    return(nd)
}

function add_lsib(nd,lsib,nodes) {
    //root 不可操作
    if(is_root(nd)) {
        console.log("cant addlsib to root")
        return(nd)
    }
    //
    let cond = is_fstch(nd)
    lsib._tree = nd._tree
    if(cond) {
        let parent = get_parent(nd,nodes)
        nd._lsib = undefined
        lsib._lsib = null
        parent._fstch = lsib._id
    } else {
        let old_lsib = get_lsib(nd,nodes)
        old_lsib._rsib = lsib._id
    }
    lsib._rsib = nd._id
    nodes[lsib._id] = lsib
    return(nd)
}

function insert_child(which,nd,child,nodes) {
    let children = get_children(nd,nodes)
    let lngth = children.length
    if(lngth ===0) {
        return(prepend_child(nd,child,nodes))
    } else {
        let cond = (which<=lngth) && (which >=0)
        if(!cond) {
            console.log("not in range!!")
            return(nd)
        } else {
            if(which === 0) {
                return(prepend_child(nd,child,nodes))
            } else if(which === lngth) {
                return(append_child(nd,child,nodes))
            } else {
                let lnd = children[which-1]
                return(add_rsib(lnd,child,nodes))
            }
        }
    }
}

/**/
function disconnect(nd,nodes) {
}

/**/

//

function get_fstch(nd,nodes) {
    let fstch = (nd._fstch===null)?null:nodes[nd._fstch]
    return(fstch)
}


function get_children(nd,nodes){
    let children = []
    let child = get_fstch(nd,nodes)
    while(child!==null){
        children.push(child)
        child = get_rsib(child,nodes)
    }
    return(children)
}

function get_lstch(nd,nodes) {
    let children = get_children(nd,nodes)
    if(children.length ===0){
        return(null)
    } else {
        return(children[children.length-1])
    }
}

function get_which_child(which,nd,nodes) {
    let children = get_children(nd,nodes)
    if(children.length ===0){
        return(null)
    } else {
        let cond = (which>children.length-1) || (which <0)
        if(cond){
            return(null)
        } else {
            return(children[which])
        }
    }
}

function get_some_children(nd,nodes,...whiches) {
    let children = get_children(nd,nodes)
    let some = []
    if(children.length ===0) {
        
    } else {
        for(let i=0;i<whiches.length;i++) {
            let which = whiches[i]
            let cond = (which>children.length-1) || (which <0)
            if(cond) {
                
            } else {
                some.push(children[which])
            }
        }
    }
    return(some)
}


////
function get_lstsib(nd,nodes) {
    let lstrsib = nd
    let rsib = get_rsib(nd,nodes)
    while(rsib!==null) {
        lstrsib = rsib
        rsib = get_rsib(rsib,nodes)
    }
    return(lstrsib)
}

function get_preceding_sibs(nd,nodes) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    let seq = cmmn.dtb_kv_get_seq("_id",nd._id,sibs)
    let some = []
    if(sibs.length ===0) {
        
    } else {
        for(let i=0;i<sibs.length;i++) {
            let cond = i<seq
            if(cond) {
                some.push(sibs[i])
            }
        }
    }
    return(some)
}

function get_following_sibs(nd,nodes) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    let seq = cmmn.dtb_kv_get_seq("_id",nd._id,sibs)
    let some = []
    if(sibs.length ===0) {
        
    } else {
        for(let i=0;i<sibs.length;i++) {
            let cond = i>seq
            if(cond) {
                some.push(sibs[i])
            }
        }
    }
    return(some)
}

function get_sibs(nd,nodes,including_self=false) {
    let parent = get_parent(nd,nodes)
    let sibs = get_children(parent,nodes)
    if(including_self) {
        return(sibs)
    } else {
        sibs = cmmn.dtb_kv_rm('_id',nd._id,sibs)
    }
    return(sibs)
}

function get_fstsib(nd,nodes) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    return(sibs[0])
}


function get_which_sib(which,nd,nodes) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    let lngth = sibs.length
    let cond = (which<=lngth-1) && (which >=0)
    if(cond) {
        return(sibs[which])
    } else {
        return(null)
    }
}

function get_some_sibs(nd,nodes,...whiches) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    let some = []
    if(sibs.length ===0) {
        
    } else {
        for(let i=0;i<whiches.length;i++) {
            let which = whiches[i]
            let cond = (which>sibs.length-1) || (which <0)
            if(cond) {
                
            } else {
                some.push(sibs[which])
            }
        }
    }
    return(some)
}

function get_sibseq(nd,nodes) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    let seq = cmmn.dtb_kv_get_seq("_id",nd._id,sibs)
    return(seq)
}

function get_lsib(nd,nodes) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    let seq = cmmn.dtb_kv_get_seq("_id",nd._id,sibs)
    if(seq === 0) {
        return(null)
    } else {
        return(sibs[seq-1])
    }
}

function get_rsib(nd,nodes) {
    let rsib = (nd._rsib===null)?null:nodes[nd._rsib]
    return(rsib)
}

//

function get_lyr(nd,nodes) {
    let parent = get_parent(nd,nodes)
    if(parent === null) {
        return([nd])
    } else {
        let parent_sibs = get_sibs(parent,nodes,including_self=true)
        let childrens = parent_sibs.map(r=>(get_children(r,nodes)))
        let lyr = Array.prototype.concat(...childrens)
        return(lyr)
    }
}

function get_breadth(nd,nodes) {
    let lyr = get_lyr(nd,nodes)
    let breadth = cmmn.dtb_kv_get_seq('_id',nd._id,lyr)
    return(breadth)
}

function get_count(nd,nodes) {
    let sdfs = get_sdfs(nd,nodes)
    return(sdfs.length)
}

//
function get_root(nd,nodes) {
    /*
        get_root(root,nodes)
        get_root(child,nodes)
    */
    let lst_parent = nd
    let parent = get_parent(nd,nodes)  
    while(parent !== null) {
        lst_parent = parent
        parent = get_parent(parent,nodes)
    }
    return(lst_parent)
}

function get_parent(nd,nodes) {
    let parent;
    if(is_root(nd)) {
        parent = null
    } else {
        let lstrsib = get_lstsib(nd,nodes)
        parent = nodes[lstrsib._parent]
    }
    return(parent)
}

function get_ances(nd,nodes,including_self=false) {
    let ances = []
    let parent = get_parent(nd,nodes)  
    while(parent !== null) {
        ances.push(parent)
        parent = get_parent(parent,nodes)
    }
    if(including_self){
        ances.unshift(nd)
    } else {
        
    }
    return(ances)
}

function get_which_ance(which,nd,nodes) {
    let ances = get_ances(nd,nodes,including_self=true)
    let lngth = ances.length
    let cond = (which<lngth) && (which>=0)
    if(cond) {
        return(ances[which])
    } else {
        return(null)
    }
}

function get_some_ances(nd,nodes,...whiches) {
    let ances = get_ances(nd,nodes,including_self=true)
    let some = []
    if(ances.length ===0) {
        
    } else {
        for(let i=0;i<whiches.length;i++) {
            let which = whiches[i]
            let cond = (which>ances.length-1) || (which <0)
            if(cond) {
                
            } else {
                some.push(ances[which])
            }
        }
    }
    return(some)
}


function get_depth(nd,nodes) {
    let ances = get_ances(nd,nodes,including_self=true)
    return(ances.length-1)
}

function get_height(nd,nodes) {
    let depth = get_depth(nd,nodes)
    let sdfs = get_sdfs(nd,nodes)
    let des_depths = sdfs.map(r=>get_depth(r,nodes))
    let max = Math.max(...des_depths)
    return(max-depth+1)
}

function get_fst_des_depth(nd,nodes) {
    let depth = get_depth(nd,nodes)
    return(depth+1)
}

function get_lst_des_depth(nd,nodes) {
    let depth = get_depth(nd,nodes)
    let sdfs = get_sdfs(nd,nodes)
    let des_depths = sdfs.map(r=>get_depth(r,nodes))
    let max = Math.max(...des_depths)
    return(max)
}

function get_which_des_depth(which,nd,nodes) {
    let depth = get_depth(nd,nodes)
    return(depth+which)
}


//

function get_rsib_of_fst_ance_having_rsib(nd,nodes) {
    let parent = get_parent(nd,nodes)
    while(parent!==null) {
        let rsib = get_rsib(parent,nodes)
        if(rsib!==null) {
            return(rsib)
        } else {
            parent = get_parent(parent,nodes)
        }
    }
    return(null)
}


function get_sdfs_next(nd,nodes) {
    let fstch = get_fstch(nd,nodes)
    if(fstch !== null) {
        return(fstch)
    } else {
        let rsib = get_rsib(nd,nodes)
        if(rsib !== null) {
            return(rsib)
        } else {
            return(get_rsib_of_fst_ance_having_rsib(nd,nodes))
        }
    }
}

function get_drmost_des(nd,nodes){
    let old_lstch = nd
    let lstch = get_lstch(nd,nodes)
    while(lstch !== null) {
        old_lstch = lstch
        lstch = get_lstch(lstch,nodes)
    }
    return(old_lstch)
}

function get_sdfs_prev(nd,nodes) {
    if(is_root(nd)) {
        return(null)
    }
    let cond = is_leaf(nd)
    if(cond) {
        let lsib = get_lsib(nd,nodes)
        if(lsib !== null) {
            return(lsib)
        } else {
            let parent = get_parent(nd,nodes)
            return(parent)
        }
    } else {
        let lsib = get_lsib(nd,nodes)
        if(lsib !== null) {
            let cond = is_leaf(lsib)
            if(cond) {
                return(lsib)
            } else {
                return(get_drmost_des(lsib,nodes))
            }
        } else {
            let parent = get_parent(nd,nodes)
            return(parent)
        }
    }
}


function get_sdfs(nd,nodes) {
    let nd_depth = get_depth(nd,nodes)
    let sdfs =[]
    while(nd!==null) {
        sdfs.push(nd)
        nd = get_sdfs_next(nd,nodes)
        if(nd!==null) {
            let depth = get_depth(nd,nodes)
            if(depth<=nd_depth) {
                break
            }
        }
    }
    return(sdfs)
}





function get_edfs(nd,nodes) {
}

function get_sedfs(nd,nodes) {
}

function get_mat(nd,nodes) {
}
//


function mat2sdfs(mat,nodes) {
}

function mat2edfs(mat,nodes) {
    
}

function mat2sedfs(mat,nodes) {
}

function sdfs2mat(sdfs,nodes) {
}

function sdfs2edfs(mat,nodes) {
}

function sdfs2sedfs(mat,nodes) {
}

function edfs2mat(sdfs,nodes) {
}

function edfs2sdfs(mat,nodes) {
}

function edfs2sedfs(mat,nodes) {
}

function sedfs2mat(sdfs,nodes) {
}        

function sedfs2sdfs(mat,nodes) {
}        

function sedfs2edfs(mat,nodes) {
}



//

function get_deses(nd,nodes,including_self=false) {
    let deses = get_sdfs(nd,nodes)
    if(including_self) {
    } else {
        deses.splice(0,1)
    }
    return(deses)
}

function get_fst_deses(nd,nodes) {
    return(get_children(nd,nodes))
}

function get_lst_deses(nd,nodes) {
    let deses = get_deses(nd,nodes,including_self=false)
    let des_depths = sdfs.map(r=>get_depth(r,nodes))
    let max = Math.max(...des_depths)
    deses = deses.filter(r=>(get_depth(r,nodes)===max))
    return(deses)
}

function get_which_deses(which,nd,nodes) {
    let depth = get_depth(nd,nodes)
    let deses = get_deses(nd,nodes,including_self=false)
    let des_depths = sdfs.map(r=>get_depth(r,nodes))
    deses = deses.filter(r=>(get_depth(r,nodes)===(depth+which)))
    return(deses)
}

function get_some_deses(nd,nodes,...whiches) {
    let deses = whiches.map(which => get_which_deses(which,nd,nodes))
    deses = Array.prototype.concat(...deses)
    return(deses)
}


//

const dflt_show_connd = {
    't':'├── ',
    'v':'│   ',
    'l':'└── ',
    'ws':'    '
}

function dflt_calc_conn_map_func(conn) {
    let rslt;
    if(conn==='t') {
        rslt = 'v'
    } else if(conn === 'v') {
        rslt = 'v'
    } else {
        rslt = 'ws'
    }
    return(rslt)
}


function dflt_calc_conns(nd,nodes) {
    nd._ui = {}
    if(is_root(nd)){
        nd._ui.conns = []
    } else {
        let parent = get_parent(nd,nodes)
        let pconns = parent._ui.conns
        let conns = pconns.map(conn=>dflt_calc_conn_map_func(conn))
        let cond = is_lstch(nd)
        if(cond) {
            conns.push('l')
        } else {
            conns.push('t')
        }
        nd._ui.conns = conns
    }
    return(nd)
}


function conns2repr(conns) {
    conns = conns.map(conn=>dflt_show_connd[conn])
    return(conns.join(''))
}


function get_sdfs_repr_arr(nd,nodes,f){
    let depth = get_depth(nd,nodes)
    let sdfs = get_deses(nd,nodes,including_self=true)
    sdfs = sdfs.map(nd=>dflt_calc_conns(nd,nodes))
    let conns_array = sdfs.map(nd=>nd._ui.conns)
    conns_array = conns_array.map(conns=>conns.slice(depth))
    conns_array = conns_array.map(conns=>conns2repr(conns))
    let arr = conns_array.map((conns,i)=>(conns+sdfs[i]._id))
    return(arr)
}

function sdfs_show_all(nd,nodes,f=dflt_sdfs_show_callback){
    let arr = get_sdfs_repr_arr(nd,nodes,f)
    let repr = arr.join('\n')
    console.log(repr)
}


function sdfs_show_from(nd,nodes,from){
    let arr = get_sdfs_repr_arr(nd,nodes,f)
    arr = arr.slice(from)
    let repr = arr.join('\n')
    console.log(repr)
}

function sdfs_show_to(nd,nodes,to){
    let arr = get_sdfs_repr_arr(nd,nodes,f)
    arr = arr.slice(0,to)
    let repr = arr.join('\n')
    console.log(repr)
}

function sdfs_show_from_to(nd,nodes,from,to){
    let arr = get_sdfs_repr_arr(nd,nodes,f)
    arr = arr.slice(from,to)
    let repr = arr.join('\n')
    console.log(repr)
}
//


module.exports = {
    creat_root:creat_root,
    creat_nd:creat_nd,
    is_inited:is_inited,
    is_root:is_root,
    is_fstch:is_fstch,
    is_lstch:is_lstch,
    is_leaf:is_leaf,
    eq:eq,
    prepend_child:prepend_child,
    append_child:append_child,
    insert_child:insert_child,
    add_rsib:add_rsib,
    add_lsib:add_lsib,
    get_fstch:get_fstch,
    get_rsib:get_rsib,
    get_children:get_children,
    get_lstch:get_lstch,
    get_which_child:get_which_child,
    get_some_child:get_some_child,
    get_fstsib:get_fstsib,
    get_lstsib:get_lstsib,
    get_preceding_sibs:get_preceding_sibs,
    get_following_sibs:get_following_sibs,
    get_sibs:get_sibs,
    get_which_sib:get_which_sib,
    get_some_sibs:get_some_sibs,
    get_sibseq:get_sibseq,
    get_lsib:get_lsib,
    get_rsib:get_rsib,
    get_lyr:get_lyr,
    get_count:get_count,
    get_root:get_root,
    get_parent:get_parent,
    get_ances:get_ances,
    get_which_ance:get_which_ance,
    get_some_ances:get_some_ances,
    get_depth:get_depth,
    get_height:get_height,
    get_fst_des_depth:get_fst_des_depth,
    get_lst_des_depth:get_lst_des_depth,
    get_which_des_depth:get_which_des_depth,
    get_rsib_of_fst_ance_having_rsib:get_rsib_of_fst_ance_having_rsib,
    get_sdfs_next:get_sdfs_next,
    get_drmost_des:get_drmost_des,
    get_sdfs_prev:get_sdfs_prev,
    get_sdfs:get_sdfs,
    ///
    get_deses:get_deses,
    get_fst_deses:get_fst_deses,
    get_lst_deses:get_lst_deses,
    get_which_deses:get_which_deses,
    get_some_deses:get_some_deses,
    //
    dflt_show_connd,
    dflt_calc_conn_map_func,
    dflt_calc_conns,
    conns2repr,
    get_sdfs_repr_arr,
    sdfs_show_all,
    sdfs_show_from,
    sdfs_show_to,
    sdfs_show_from_to,
}


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
