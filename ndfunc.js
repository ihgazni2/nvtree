const cmmn = require("./cmmn.js")

//util

function calc_next_id(nodes) {
    let ids = cmmn.dict_keys(nodes)
    return(Math.max(...ids)+1)
}

function update_nodes_ids(nodes0,nodes1) {
    let next_id = calc_next_id(nodes0)
    for(let id in nodes1) {
        nodes1[id]._id = nodes1[id]._id + next_id
    }
    return(nodes1)
}

//

function creat_root(n=0){
    let _id = n
    let root = {
        _id:_id,
        _fstch:null,
        _lsib:null,
        _rsib:null,
        _parent:null,
        _tree:_id  //属于哪个tree
    }
    return(root)
}


function creat_nd(nodes,n=0) {
    /*
        by_dflt  leaf_nd
    */
    let _id = calc_next_id(nodes)+n
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


//

function is_inited(nd) {
    //被添加到了树上
    let cond = (nd._tree !== undefined)
    return(cond)
}

function is_root(nd) {
    //tree 是自己
    let cond0 = (nd._tree!== undefined)
    let cond1 = (nd._tree === nd._id)
    return(cond0 && cond1)
}

function is_fstch(nd) {
    //没有左兄弟
    let cond = (nd._lsib === null)
    return(cond)
}

function is_lstch(nd) {
    //没有右兄弟
    let cond = (nd._rsib === null)
    return(cond)
}

function is_leaf(nd) {
    //没有子
    let cond = (nd._fstch === null)
    return(cond)
}

/*
function eq(nd0,nd1) {
    //id 必须完全一致
    //只有同一颗树下自己等于自己
    let cond0 = (nd0._id === nd1._id)
    let cond1 = (nd0._tree === nd1._tree)
    return(cond0 && cond1)
}
*/

//

function prepend_child(nd,child,nodes) {
    //只有根节点才可以被链接到另一颗树上
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
    //返回当前节点
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
    //操作自己
}

//在父节点上操作
function rm_fstch(nd,nodes) {
}

function rm_lstch(nd,nodes) {
}

function rm_which(index,nd,nodes) {
}

function rm_some(indexes,nd,nodes) {
}

function rm_all(nd,nodes) {
}


/**/

//child

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


////sibs
function get_lstsib(nd,nodes,including_self=false) {
    let lstrsib = nd
    let rsib = get_rsib(nd,nodes)
    while(rsib!==null) {
        lstrsib = rsib
        rsib = get_rsib(rsib,nodes)
    }
    if(including_self){
        return(lstrsib)
    } else {
        return(null)
    }
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
    let sibs;
    if(parent !== null) { 
        sibs = get_children(parent,nodes)
    } else {
        sibs =[nd]
    }
    if(including_self) {
        return(sibs)
    } else {
        sibs = cmmn.dtb_kv_rm('_id',nd._id,sibs)
    }
    return(sibs)
}

function get_fstsib(nd,nodes,including_self=false) {
    let sibs = get_sibs(nd,nodes,including_self=true)
    if(including_self) {
        return(sibs[0])
    } else {
        if(sibs[0]._id === nd._id) {
            return(null)
        } else {
            return(sibs[0])
        }
    }
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

//layer

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

function get_fst_lyr_des_depth(nd,nodes) {
    let cond = is_leaf(nd)
    if(cond) {
        return(null)
    } else {
        let depth = get_depth(nd,nodes)
        return(depth+1)
    }
}

function get_lst_lyr_des_depth(nd,nodes) {
    let cond = is_leaf(nd)
    if(cond) {
        return(null)
    } else {
        let depth = get_depth(nd,nodes)
        let sdfs = get_sdfs(nd,nodes)
        let des_depths = sdfs.map(r=>get_depth(r,nodes))
        let max = Math.max(...des_depths)
        return(max)
    }
}

function get_which_lyr_des_depth(which,nd,nodes) {
    let depth = get_depth(nd,nodes)
    let height = get_height(nd,nodes)
    if(height<=which){
        return(null)
    } else {
        return(depth+which)
    }
}


function get_lyr(nd,nodes) {
    let root = get_root(nd,nodes)
    let sdfs = get_sdfs(root,nodes)
    let depth = get_depth(nd,nodes)
    let lyr = sdfs.filter(nd=>(get_depth(nd,nodes) === depth))
    return(lyr) 
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

//ance
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
        let lstrsib = get_lstsib(nd,nodes,true)
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



//sdfs  depth-first  record-when-open-tag

function get_rsib_of_fst_ance_having_rsib(nd,nodes) {
    /*
        along the parent chain until root,not_including_self
        if the parent have rsib,return the rsib-of-parent
        ---------
    */
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
    /*
        如果有child, 返回first-child
            如果有rsib,返回rsib
                沿着祖先链往上,找到第一个有rsib的ance,返回这个ance的rsib
        如果返回null,表明当前节点是sdfs数组的最后一个节点
    */
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
    /*
       down-most  and right-most of subtree
       including_self
    */
    let old_lstch = nd
    let lstch = get_lstch(nd,nodes)
    while(lstch !== null) {
        old_lstch = lstch
        lstch = get_lstch(lstch,nodes)
    }
    return(old_lstch)
}

function get_sdfs_prev(nd,nodes) {
    /*
        如果是root ,返回null 因为root 是起始点
        如果是叶子节点
            如果有lsib,返回lsib
            如果没有lsib,返回parent(没有lsib 说明这个节点是first-child)
        如果不是叶子节点
             如果有左邻居
                 lsib是leaf,返回lsib
                 lsib不是leaf,返回drmost-of-lsib 
             如果没有lsib,返回parent
    */ 
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

//edfs


function get_dlmost_des(nd,nodes) {
    /*
        including_self
    */
    let old_fstch = nd
    let fstch = get_fstch(nd,nodes)
    while(fstch !== null) {
        old_fstch = fstch
        fstch = get_fstch(fstch,nodes)
    }
    return(old_fstch)
}

function get_edfs_next(nd,nodes) {
    let rsib = get_rsib(nd,nodes)
    if(rsib === null) {
        //如果没有右兄弟，说明节点是lstch,此时应该返回父节点
        let p = get_parent(nd,nodes)
        return(p)
    } else {
       //如果有右兄弟，返回down-left-most-of-rsib
       return(get_dlmost_des(rsib,nodes))
    }
}

function get_lsib_of_fst_ance_having_lsib(nd,nodes) {
    /*
        along the parent chain until root,not_including_self
        if the parent have lsib,return the lsib-of-parent
        ---------
    */
    let parent = get_parent(nd,nodes)
    while(parent!==null) {
        let lsib = get_lsib(parent,nodes)
        if(lsib!==null) {
            return(lsib)
        } else {
            parent = get_parent(parent,nodes)
        }
    }
    return(null)
}



function get_edfs_prev(nd,nodes) {
    let cond = is_leaf(nd)
    if(!cond) {
        return(get_lstch(nd,nodes))
    } else {
       let lsib = get_lsib(nd,nodes)
       if(lsib === null) {
           return(get_lsib_of_fst_ance_having_lsib(nd,nodes))
       } else {
           return(lsib)
       }
    }    
}


function get_edfs(nd,nodes) {
    let edfs = []
    let nxt = get_dlmost_des(nd,nodes)
    while(nxt !== null ) {
        edfs.push(nxt)
        nxt = get_edfs_next(nxt,nodes)
    }
    return(edfs)
}

//

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

function get_fst_lyr_deses(nd,nodes) {
    return(get_children(nd,nodes))
}

function get_lst_lyr_deses(nd,nodes) {
    let deses = get_deses(nd,nodes,including_self=false)
    let des_depths = sdfs.map(r=>get_depth(r,nodes))
    let max = Math.max(...des_depths)
    deses = deses.filter(r=>(get_depth(r,nodes)===max))
    return(deses)
}

function get_which_lyr_deses(which,nd,nodes) {
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


module.exports = {
    //creat
    creat_root:creat_root,
    creat_nd:creat_nd,
    //is
    is_inited:is_inited,
    is_root:is_root,
    is_fstch:is_fstch,
    is_lstch:is_lstch,
    is_leaf:is_leaf,
    //insert 
    prepend_child:prepend_child,
    append_child:append_child,
    insert_child:insert_child,
    add_rsib:add_rsib,
    add_lsib:add_lsib,
    //child
    get_fstch:get_fstch,
    get_rsib:get_rsib,
    get_children:get_children,
    get_lstch:get_lstch,
    get_which_child:get_which_child,
    get_some_children:get_some_children,
    //sib
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
    //mat
    get_lyr:get_lyr,
    get_breadth:get_breadth,
    get_count:get_count,
    get_depth:get_depth,
    get_height:get_height,
    get_fst_lyr_des_depth:get_fst_lyr_des_depth,
    get_lst_lyr_des_depth:get_lst_lyr_des_depth,
    get_which_lyr_des_depth:get_which_lyr_des_depth,
    //ance
    get_root:get_root,
    get_parent:get_parent,
    get_ances:get_ances,
    get_which_ance:get_which_ance,
    get_some_ances:get_some_ances,
    //sdfs
    get_rsib_of_fst_ance_having_rsib:get_rsib_of_fst_ance_having_rsib,
    get_sdfs_next:get_sdfs_next,
    get_drmost_des:get_drmost_des,
    get_sdfs_prev:get_sdfs_prev,
    get_sdfs:get_sdfs,
    //edfs
    get_lsib_of_fst_ance_having_lsib:get_lsib_of_fst_ance_having_lsib,
    get_dlmost_des:get_dlmost_des,
    get_edfs_next:get_edfs_next,
    get_edfs_prev:get_edfs_prev,
    get_edfs:get_edfs,
    //
    get_deses:get_deses,
    get_fst_lyr_deses:get_fst_lyr_deses,
    get_lst_lyr_deses:get_lst_lyr_deses,
    get_which_lyr_deses:get_which_lyr_deses,
    get_some_deses:get_some_deses,
    //
}


