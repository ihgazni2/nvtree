const cmmn = require('./cmmn.js')


function _is_inited(nd) {
    //被添加到了树上
    let cond = (nd._tree !== undefined)
    return(cond)
}

function _is_root(nd) {
    //根节点的_tree 指向自己
    let cond = (nd._tree === nd)
    return(cond)
}

function _is_fstch(nd) {
    //没有左兄弟
    let cond = (nd._lsib === null)
    return(cond)
}

function _is_lstch(nd) {
    //没有右兄弟
    let cond = (nd._rsib === null)
    return(cond)
}


function _is_leaf(nd) {
    //没有子
    let cond = (nd._fstch === null)
    return(cond)
}


function _is_lonely(nd) {
    let sibs = nd.$sibs(including_self=true)
    return(sibs.length === 1)
}


/* child query*/

//_fstch is always directly

function _lstch(nd) {
    let child = nd._fstch
    let oldch = child
    while(child!==null) {
        oldch = child
        child = child._rsib
    }
    return(oldch)
}

function _which_child(index,nd) {
    let c = 0
    let child = nd._fstch
    while(true) {
        if(c === index) {
            return(child)
        } else {
            if(child === null) {
                return(child)
            } else {
            }
        }
        child = child._rsib
        c = c + 1
    }
}

function _some_children(nd,...whiches) {
    let children = []
    let c = 0
    let child = nd._fstch
    while(true) {
        if(whiches.includes(c)) {
            children.push(child)
        } else {
            if(child === null) {
                return(children)
            } else {
            }
        }
        child = child._rsib 
        c = c + 1
    }
}

function _children(nd) {
    let children = []
    let c = 0
    let child = nd._fstch
    while(true) {
        if(child === null) {
            return(children)
        } else {
            children.push(child)
        }
        child = child._rsib
        c = c + 1
    }
}


function _children_count(nd) {
    let c = 0
    let child = nd._fstch
    while(true) {
        if(child === null) {
            return(c)
        } else {
        }
        child = child._rsib
        c = c + 1
    }
}


/*sib*/

//_rsib is always directly 

function _lstsib(nd,including_self=false) {
    let rsib = nd._rsib
    let oldrsib = nd
    while(rsib !== null) {
        oldrsib = rsib
        rsib = rsib._rsib 
    }  
    if(including_self){
        return(oldrsib)
    } else {
        if(oldrsib !== nd) {
            return(oldrsib)
        } else {
            return(null)
        }
    }    
}



function _fstsib(nd,including_self=false) {
    let p = _parent(nd)
    if(p === null) {
        return((including_self)?nd:null)
    } else {
        let fstsib = p._fstch
        if(including_self) {
            return(fstsib)        
        } else {
            if(fstsib !== nd) {
                return(fstsib)
            } else {
                return(null)
            }
        }
    }
}


function _lsib(nd) {
    let fstsib = _fstsib(nd,including_self=false)
    if(fstsib === null) {
        return(null)
    } else {
        let sib = fstsib
        while(true) {
            if(sib._rsib === nd) {
                return(sib)
            } else {
            }
            sib = sib._rsib
        }
    }
}


function _psibs(nd) {
    let psibs = []
    let fstsib = _fstsib(nd,including_self=true)
    let sib = fstsib
    while(sib !== null) {
        if(sib === nd) {
            return(psibs)           
        } else {
            psibs.push(sib)
        }
        sib = sib._rsib
    }
}


function _fsibs(nd) {
    let fsibs = []
    let rsib = nd._rsib
    while(rsib !== null) {
        fsibs.push(rsib)
        rsib = rsib._rsib
    }
    return(fsibs)
}

function _sibs(nd,including_self=false) {
    let psibs = _psibs(nd)
    let fsibs = _fsibs(nd)
    let me = [nd]
    if(including_self) {
        sibs = psibs.concat(me,fsibs)
    } else {
        sibs = psibs.concat(fsibs)
    }
    return(sibs)
}


function _which_sib(index,nd) {
    let sib = _fstsib(nd,including_self=true)
    let c = 0
    while(true) {
        if(sib === null) {
            return(null)
        } else {
            if(c==index) {
                return(sib)
            }
        }
        sib = sib._rsib
        c = c + 1
    }    
}

function _some_sibs(nd,...indexes) {
    let sibs = _sibs(nd,including_self=true) 
    let some = sibs.filter(
        (r,i) => indexes.includes(i) 
    )
    return(some)   
}


function _sibseq(nd) {
    let psibs = _psibs(nd)
    return(psibs.length)
}


function _sibs_count(nd,including_self=false) {
    let sibs = nd.$sibs(including_self)
    return(sibs.length)
}




/*ance*/

function _parent(nd) {
    let lstsib = _lstsib(nd,including_self=true)
    return(lstsib._parent)
}

function _root(nd) {
    let ance = nd
    let old = nd
    while(ance !== null) {
        old = ance
        ance = ance.$parent()
    }
    return(old)    
}

function _which_ance(index,nd) {
    let c = 0
    let ance = nd
    while(ance !== null) {
        if(c === index) {
            return(ance)
        } else {
        }
        ance = ance.$parent()
        c = c+1
    }
    return(null)
}

function _ances(nd,including_self=false) {
    let ances = []
    let ance = nd
    if(including_self) {
        ances.push(ance)
    } else {
    } 
    ance = ance.$parent()
    while(ance !== null)  {
        ances.push(ance)
        ance = ance.$parent()
    }
    return(ances) 
}

function _some_ances(nd,...indexes) {
    let ances = _ances(nd,including_self=true)
    let some = ances.filter(
        (r,i) => indexes.includes(i)
    )
    return(some)      
}

function _ances_count(nd,including_self=false) {
    let ances = _ances(nd,including_self)
    return(ances.length)
}


/**/
function _luncle(nd) {
    let p = nd.$parent()
    if(p === null) {
        return(null)
    } else {
        return(p.$lsib())
    } 
}

function _runcle(nd) {
    let p = nd.$parent()
    if(p === null) {
        return(null)
    } else {
        return(p.$rsib())
    } 
}

function _lcin(nd) {
    let luncle = nd.$luncle()
    if(!nd.$is_fstch()) {
        return(null) 
    } else if(luncle === null) {
        return(null)
    } else {
        return(luncle.$lstch())
    }
}

function _rcin(nd) {
    let runcle = nd.$runcle()
    if(!nd.$is_lstch()) {
        return(null)
    } else if(runcle === null) {
        return(null)
    } else {
        return(runcle.$fstch())
    }
}

/**/

function _lyr(nd) {
    let rt = nd.$root() 
    let sdfs = rt.$sdfs() 
    let depth = nd.$depth()
    let lyr = sdfs.filter(nd=>(nd.$depth() === depth))
    return(lyr)    
}

/**/


function _breadth(nd) {
    let lyr = nd.$lyr()
    let breadth = lyr.indexOf(nd)
    return(breadth)   
}

function _width(nd) {
    //只计算叶子个数的宽度
    let sdfs = nd.$sdfs()
    sdfs = sdfs.filter(nd=>nd.$is_leaf())
    return(sdfs.length)
}

function _offset(nd) {
    //edfs filter-by-isleaf ,and then index 
    //如果是非叶子,dlmost的offset
    let rt = nd.$root()
    let edfs = rt.$edfs()
    let index;
    if(nd.$is_leaf()) {
        index = edfs.indexOf(nd) 
    } else {
        let dlmost = nd.$dlmost_des()
        index = edfs.indexOf(dlmost)
    }
    edfs = edfs.slice(0,index+1)
    offset = edfs.filter(nd=>nd.$is_leaf()).length - 1
    return(offset) 
}

/**/


function _deses(nd,including_self=false) {
    let drmost = _drmost_des(nd) 
    let sdfs = _sdfs(nd)
    let index = sdfs.indexOf(drmost) 
    if(including_self) {
        return(sdfs.slice(0,index+1)) 
    } else {
        return(sdfs.slice(1,index+1)) 
    } 
}

function _lst_lyr_deses(nd) {
    let deses = nd.$deses(including_self=false)
    let des_depths = deses.map(r=>r.$depth())
    let max = Math.max(...des_depths)
    deses = deses.filter(r=>(r.$depth()===max))
    return(deses) 
}

function _which_lyr_deses(index,nd) {
    let depth = nd.$depth()
    let deses = nd.$deses(including_self=false)
    let des_depths = deses.map(r=>r.$depth())
    deses = deses.filter(r=>(r.$depth()===(depth+index)))
    return(deses)
}

function _some_lyrs_deses(nd,...rel_depths) {
    let depth = nd.$depth()
    let abs_depths = rel_depths.map(r=>r+depth)
    let deses = nd.$deses(including_self=false)
    let des_depths = deses.map(r=>r.$depth())
    deses = deses.filter(r=>(abs_depths.includes(r.$depth())))
    return(deses)
}


/*add node */

function _prepend_child(nd,child) {
    //只有根节点才可以被链接到另一颗树上
    let cond = nd.$is_leaf()
    child._tree = nd._tree
    child._lsib = null
    if(cond){
        //child 也是lstch
        child._rsib = null
        child._parent = nd
    } else {
        //变更old_fstch
        let old_fstch = nd._fstch
        //old_fstch 不再是fstch
        old_fstch._lsib = undefined
        //更新child
        child._rsib = old_fstch
        //添加child 
    }   
    nd._fstch = child
    return(child)
}   


function _append_child(nd,child) {
    let cond = nd.$is_leaf() 
    child._tree = nd._tree
    child._rsib = null
    if(cond){
        //child 也是lstch
        nd._fstch = child
        child._lsib = null
    } else {
        //变更old_lstch
        let old_lstch = nd.$lstch() 
        //old_lstch 不再是lstch
        old_lstch._parent = undefined
        old_lstch._rsib = child
    }
    child._parent = nd
    return(child)
}



function _add_rsib(nd,rsib) {
    //root 不可操作
    if(nd.$is_root()) {
        console.log("cant addrsib to root")
        return(nd)
    }
    //
    let cond = nd.$is_lstch()
    rsib._tree = nd._tree
    if(cond) {
        rsib._parent = nd._parent
        nd._parent = undefined
        rsib._rsib = null
    } else {
        rsib._rsib = nd._rsib
    }
    nd._rsib = rsib
    return(rsib)
}


function _add_lsib(nd,lsib) {
    //root 不可操作
    if(nd.$is_root()) {
        console.log("cant addlsib to root")
        return(nd)
    }
    //
    let cond = nd.$is_fstch()
    lsib._tree = nd._tree
    if(cond) {
        let parent = nd.$parent() 
        nd._lsib = undefined
        lsib._lsib = null
        parent._fstch = lsib
    } else {
        let old_lsib = nd.$lsib()
        old_lsib._rsib = lsib
    }
    lsib._rsib = nd
    return(lsib)
}


function _insert_child(which,nd,child) {
    let children = nd.$children()
    let lngth = children.length
    if(lngth ===0) {
        child = nd.$prepend_child(nd,child)
    } else {
        let cond = (which<=lngth) && (which >=0)
        if(!cond) {
            console.log("not in range!!")
        } else {
            if(which === 0) {
                child = nd.$prepend_child(nd,child)
            } else if(which === lngth) {
                child = nd.$append_child(nd,child)
            } else {
                let lnd = children[which-1]
                child = lnd.$add_rsib(child)
            }   
        }   
    }
    return(child)   
}   


/*sdfs*/

function _rsib_of_fst_ance_having_rsib(nd) {
    let p = nd.$parent()
    while(p!==null) {
        let rsib = p.$rsib()
        if(rsib !== null) {
            return(rsib)
        } else {
            p = p.$parent()  
        }
    }
    return(null)
}

function _sdfs_next(nd) {
    let fstch = nd.$fstch()
    if(fstch !== null) {
        return(fstch)
    } else {
        let rsib = nd.$rsib()
        if(rsib !== null) {
            return(rsib)
        } else {
            return(nd.$rsib_of_fst_ance_having_rsib())
        }
    }    
}

function _drmost_des(nd) {
    let old_lstch = nd
    let lstch = nd.$lstch()
    while(lstch !== null) {
        old_lstch = lstch
        lstch = lstch.$lstch()
    }
    return(old_lstch)
}

function _sdfs_prev(nd) {
    if(nd.$is_root()) {
        return(null)
    }
    let cond = nd.$is_leaf()
    if(cond) {
        let lsib = nd.$lsib()
        if(lsib !== null) {
            return(lsib)
        } else {
            let parent = nd.$parent()
            return(parent)
        }
    } else {
        let lsib = nd.$lsib()
        if(lsib !== null) {
            let cond = lsib.$is_leaf()
            if(cond) {
                return(lsib)
            } else {
                return(lsib.$drmost_des())
            }
        } else {
            let parent = nd.$parent()
            return(parent)
        }
    }
}

function _sdfs(nd) {
    let depth = nd.$depth()
    if(nd === null) {
        return([])
    } else {
        let sdfs =[nd]
        nd = nd.$sdfs_next()
        while(nd!==null && (nd.$depth() >depth) ) {
            sdfs.push(nd)
            nd = nd.$sdfs_next()
        }
        return(sdfs)  
    }  
}

/**/

function _dlmost_des(nd) {
    let old_fstch = nd
    let fstch = nd.$fstch()
    while(fstch !== null) {
        old_fstch = fstch
        fstch = fstch.$fstch()
    }
    return(old_fstch)
}

function _edfs_next(nd) {
    let rsib = nd.$rsib()
    if(rsib === null) {
        //如果没有右兄弟，说明节点是lstch,此时应该返回父节点
        let p = nd.$parent()
        return(p)
    } else {
       //如果有右兄弟，返回down-left-most-of-rsib
       return(rsib.$dlmost_des())
    }
}

function _lsib_of_fst_ance_having_lsib(nd) {
    /*
        along the parent chain until root,not_including_self
        if the parent have lsib,return the lsib-of-parent
        ---------
    */
    let parent = nd.$parent() 
    while(parent!==null) {
        let lsib = parent.$lsib()
        if(lsib!==null) {
            return(lsib)
        } else {
            parent = parent.$parent()
        }
    }
    return(null)
}

function _edfs_prev(nd) {
    let cond = nd.$is_leaf() 
    if(!cond) {
        return(nd.$lstch())
    } else {
       let lsib = nd.$lsib()
       if(lsib === null) {
           return(nd.$lsib_of_fst_ance_having_lsib())
       } else {
           return(lsib)
       }
    }   
}



function _edfs(nd) {
    let edfs = []
    let nxt = nd.$dlmost_des()
    while(nxt !== null ) {
        edfs.push(nxt)
        if(nxt === nd) {
            break;
        } else {
            nxt = nxt.$edfs_next()
        }
    }
    return(edfs)

}






/**/



/**/
function _add_extra(d,nd) {
    for(let k in d) {
        nd[k] = d[k]
    }
}


/**/

class _Node {
    constructor() {
        this._fstch = null
        this._lsib = undefined
        this._rsib = undefined
        this._parent = undefined
        this._tree = undefined
        this.$guid = cmmn.gen_guid()
    }
    $is_inited() {
        return(_is_inited(this))
    }
    $is_root() {
        return(_is_root(this))
    }
    $is_fstch() {
        return(_is_fstch(this))
    }
    $is_lstch() {
        return(_is_lstch(this))
    }   
    $is_leaf() {
        return(_is_leaf(this))
    }
    $is_lonly() {
        return(_is_lonely(this))
    }
    //child
    $fstch() {
        return(this._fstch)
    }
    $lstch() {
        return(_lstch(this))
    }
    $which_child(index) {
        return(_which_child(index,this))
    }
    $some_children(...indexes) {
        return(_some_children(this,...indexes))
    }
    $children() {
        return(_children(this))
    }
    $children_count() {
        return(_children_count(this))
    }
    //
    $rsib() {
        return(this._rsib)
    }
    $lsib() {
        return(_lsib(this))
    }
    $fstsib(including_self=false) {
        return(_fstsib(this,including_self))
    } 
    $lstsib(including_self=false) {
        return(_lstsib(this,including_self))
    }
    $psibs() {
        return(_psibs(this))
    }
    $fsibs() {
        return(_fsibs(this))
    }
    $which_sib(index) {
        return(_which_sib(index,this))
    }
    $some_sibs(...indexes) {
        return(_some_sibs(this,...indexes))
    }
    $sibseq() {
        return(_sibseq(this))
    }
    $sibs(including_self=false) {
        return(_sibs(this,including_self))
    }
    $sibs_count(including_self=false) {
        return(_sibs_count(this,including_self))
    } 
    //
    $parent() {
        return(_parent(this))
    } 
    $root() {
        return(_root(this))
    } 
    $ances(including_self=false) {
        return(_ances(this,including_self))
    }
    $which_ance(index) {
        return(_which_ance(index,this))
    }
    $some_ances(...indexes) {
        return(_some_ances(this,...indexes))
    }
    $ances_count(including_self=false) {
        return(_ances_count(this,including_self))
    }
    //
    $prepend_child(child) {
        child = (child===undefined)?(new _Node()):child
        return(_prepend_child(this,child))       
    }
    $insert_child(which,child) {
        child = (child===undefined)?(new _Node()):child
        return(_insert_child(which,this,child))
    }
    $append_child(child)  {
        child = (child===undefined)?(new _Node()):child
        return(_append_child(this,child))
    }
    //
    $add_rsib(rsib) {
        rsib = (rsib===undefined)?(new _Node()):rsib
        return(_add_rsib(this,rsib))
    }
    $add_lsib(lsib)  {
        lsib = (lsib===undefined)?(new _Node()):lsib
        return(_add_lsib(this,lsib))
    }  
    //
    $rsib_of_fst_ance_having_rsib() {
        return(_rsib_of_fst_ance_having_rsib(this))
    } 
    $sdfs_next() {
        return(_sdfs_next(this)) 
    }
    $drmost_des() {
        return(_drmost_des(this))
    }
    $sdfs_prev() {
        return(_sdfs_prev(this))
    }
    $sdfs() {
        return(_sdfs(this))
    }
    //
    $dlmost_des() {
        return(_dlmost_des(this))
    }
    $edfs_next() {
        return(_edfs_next(this))
    }
    $lsib_of_fst_ance_having_lsib() {
        return(_lsib_of_fst_ance_having_lsib(this))
    }
    $edfs_prev() {
        return(_edfs_prev(this))
    }
    $edfs() {
        return(_edfs(this))
    }
    $offset() {
        return(_offset(this))
    }
    //
    $deses() {
        return(_deses(this))
    }
    $lst_lyr_deses() {
        return(_lst_lyr_deses(this))
    }
    $which_lyr_deses(index) {
        return(_which_lyr_deses(index,this))
    }
    $some_lyrs_deses(...rel_depths) {
        return(_some_lyrs_deses(this,...rel_depths))
    }
    //
    $count(including_self=true) {
        return(_deses(this,including_self).length)
    }
    $depth(including_self=false) {
        return(_ances(this,including_self).length)
    }
    $height() {
        let depth = this.$depth()
        let sdfs = this.$sdfs()
        let des_depths = sdfs.map(nd=>nd.$depth())
        let max = Math.max(...des_depths)
        return(max-depth+1)        
    }
    $breadth() {
        return(_breadth(this))
    }
    $width() {
        return(_width(this))
    }
    //
    $lyr() {
        return(_lyr(this))
    }
    //
    $lcin() {
        return(_lcin(this))
    }
    $rcin() {
        return(_rcin(this))
    }
    $luncle() {
        return(_luncle(this))
    }
    $runcle() {
        return(_runcle(this))
    }
    //          
}


class Node extends _Node {
    constructor() {
        //初始化为根节点,根节点代表一棵树
        super();
        this._fstch = null
        this._lsib = null
        this._rsib = null
        this._parent = null
        this._tree = this
    }
}

module.exports = {
    Node,
}


/*
var ndcls = require('./ndcls')
var rt = new ndcls.Node()

function fill_rt(rt) {
    var nd1 = rt.$append_child()
        var nd2 = nd1.$append_child()
        var nd3 = nd1.$append_child()
            var nd4 = nd3.$append_child()
            var nd5 = nd3.$append_child()
    var nd6 = rt.$append_child()
        var nd7 = nd6.$append_child()
        var nd8 = nd6.$append_child()
        var nd9 = nd6.$append_child()
            var nd10 = nd9.$append_child()
            var nd11 = nd9.$append_child()  
            var nd12 = nd9.$append_child()  
            var nd13 = nd9.$append_child()  
            var nd14 = nd9.$append_child() 
            var nd15 = nd9.$append_child() 
   return([rt,nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15])    
}

function tst_edfs() {
    var rt = new ndcls.Node()
    var nodes = fill_rt(rt)
    var arr = rt.$edfs().map(nd=>nd.$guid)
    arr[0] === nodes[2].$guid
    arr[1] === nodes[4].$guid
    arr[2] === nodes[5].$guid
    arr[3] === nodes[3].$guid
    arr[4] === nodes[1].$guid
    arr[5] === nodes[7].$guid
    arr[6] === nodes[8].$guid
    arr[7] === nodes[10].$guid
    arr[12] === nodes[15].$guid
    arr[13] === nodes[9].$guid
    arr[14] === nodes[6].$guid
    arr[15] === nodes[0].$guid
    
    var arr = nodes[1].$edfs().map(nd=>nd.$guid)
    arr[0] === nodes[2].$guid
    arr[1] === nodes[4].$guid
    arr[2] === nodes[5].$guid
    arr[3] === nodes[3].$guid
    arr[4] === nodes[1].$guid

    nodes[15].$edfs_prev().$guid === nodes[14].$guid
    nodes[14].$edfs_prev().$guid === nodes[13].$guid
    nodes[11].$edfs_prev().$guid === nodes[10].$guid
    nodes[10].$edfs_prev().$guid === nodes[8].$guid
    nodes[7].$edfs_prev().$guid === nodes[1].$guid
    nodes[1].$edfs_prev().$guid === nodes[3].$guid 
}

*/
